// Many thanks to Mathias Bynens for this research, and all the emoji code points.
// https://mathiasbynens.be/notes/javascript-unicode

import { Predicate, Token } from './'
import Range from './Range'
import UnicodeString from './UnicodeString'
import { StringStreamOptions } from './types'

const CHARS = {
  whitespace: [0x0009, 0x000B, 0x000C, 0x000D, 0x0020, 0x0085, 0x00A0, 0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x2028, 0x2029, 0x202F, 0x205F, 0x3000],
  newline:    0x000A,
}

/**
 * Unicode-aware string stream.
 */
export default class StringStream {

  //------
  // Constructor & properties

  constructor(
    source: string | UnicodeString | StringStream,
    private readonly options: StringStreamOptions = {},
  ) {
    if (source instanceof UnicodeString) {
      this.string = source
    } else if (source instanceof StringStream) {
      this.string = source.string
      this._pos = source._pos
      this._start = source._start
    } else {
      this.string = new UnicodeString(source)
    }

    this.characters = this.string.characters
    this.codePoints = this.string.codePoints
  }

  public readonly string:     UnicodeString
  public readonly characters: string[]
  public readonly codePoints: number[]

  public get multiline() {
    return this.options.multiline ?? true
  }

  private _pos = 0
  private _start = 0

  public get pos() { return this._pos }
  public get start() { return this._start }

  /** Start of string. */
  public get sos(): boolean { return this._pos === 0 }

  /** End of string. */
  public get eos(): boolean { return this._pos >= this.characters.length }

  /** Start of line. */
  public get sol(): boolean { return this.sos || this.codePoints[this._pos - 1] === CHARS.newline }

  /** End of line. */
  public get eol(): boolean { return this.eos || this.codePoints[this._pos] === CHARS.newline }

  /**
	 * Gets the current stream range.
	 */
  public get range(): Range {
    return new Range(this._start, this._pos)
  }

  /**
	 * Gets the remainder of the string from the current position.
	 */
  public get remainder(): string {
    return this.slice(this._pos)
  }

  //-----
  // Positions

  /**
	 * Marks the current position as the start position for slicing.
	 */
  public markStart() {
    this._start = this._pos
  }

  /**
	 * Returns the next (count) characters and advances, if possible.
	 */
  public next(count: number = 1): string | null {
    if (this._pos > this.characters.length - count) {
      return null
    }

    this._pos += count
    return this.substr(this._pos - count, count)
  }

  /**
	 * Resets the stream back to its default.
	 */
  public reset() {
    this._pos = 0
    this._start = 0
  }

  //------
  // Slices

  /**
	 * Creates a slice of our string. Use this instead of `this.string.slice`, as this version supports
	 * unicode.
	 */
  public slice(base: number, extent: number = -1): string {
    const length = this.characters.length
    if (extent < 0) {
      extent += length + 1
    }

    if (base < 0) {
      throw new Error('Base cannot be negative')
    }
    const end = Math.min(length, extent)

    let text = ''
    for (let i = base; i < end; i++) {
      if (!this.multiline && this.characters[i].codePointAt(0) === CHARS.newline) {
        break
      }
    
      text += this.characters[i]
    }
    return text
  }

  /**
	 * Creates a substring of our string. Use this instead of `this.string.substr` as this version
	 * supports unicode.
	 */
  public substr(start: number, length: number): string {
    return this.slice(start, start + length)
  }

  //------
  // Value retrieval

  /**
	 * Gets the current slice of the string, that is, the slice between the slice start position
	 * and the current position.
	 */
  public current() {
    return this.slice(this._start, this._pos)
  }

  /**
	 * Creates a token from the current stream state.
	 */
  public token(extra: Object): Token {
    return {
      range: this.range,
      text:  this.current(),
      ...extra,
    }
  }

  //------
  // Matching & peeking

  /**
	 * Matches the given predicate, returning the content, but does not advance the position.
	 *
   * 
	 * @param predicate
	 *   A string or regular expression to look for.
	 * @param multiline
	 *   Set this to true to eat beyond the end of the line.
	 * @returns
	 *   The content of the match, or `null` if the match failed.
	 */
  public match(predicate: Predicate, lookahead: number = 0): string | null {
    if (predicate instanceof RegExp) {
      const match = this.slice(this._pos + lookahead, -1).match(predicate)
      return match != null && match.index === 0 ? match[0] : null
    } else if (predicate instanceof Function) {
      const nextChar = this.peek()
      if (nextChar && predicate(nextChar)) {
        return this.substr(this._pos, 1)
      }
    } else {
      const slice = this.substr(this._pos + lookahead, predicate.length)
      return slice === predicate ? slice : null
    }

    return null
  }

  /**
	 * Peeks forward.
	 *
	 * @param count
	 *   The number of characters to peek.
	 */
  public peek(count: number = 1): string | null {
    if (this._pos > this.characters.length - count) {
      return null
    } else {
      return this.substr(this._pos, count)
    }
  }

  //------
  // Eating & skipping

  /**
	 * Eats the given predicate if found.
	 *
	 * @param predicate
	 *   A string or regular expression to look for, or a function which is passed the next character, and
	 *   should return a boolean if it matches.
	 * @param multiline
	 *   Set this to true to eat beyond the end of the line.
	 * @returns
	 *   The eaten string, or `null` if there was no match.
	 */
  public eat(predicate: Predicate): string | null {
    if (predicate instanceof RegExp) {
      const match = this.slice(this._pos, -1).match(predicate)
      if (match != null && match.index === 0) {
        this._pos += match[0].length
        return match[0]
      }
    } else if (predicate instanceof Function) {
      const nextChar = this.peek()
      if (nextChar != null && predicate(nextChar)) {
        this._pos += 1
        return this.substr(this._pos - 1, 1)
      }
    } else {
      const slice = this.substr(this._pos, predicate.length)
      if (slice === predicate) {
        this._pos += predicate.length
        return slice
      }
    }

    return null
  }

  /**
	 * Eats any whitespace from the current position.
	 *
	 * @returns
	 *   Whether whitespace was found.
	 */
  public eatSpace(): boolean {
    return this.eatCodePoints(...CHARS.whitespace)
  }

  /**
	 * Eats any of the given characters.
	 *
	 * @param chars
	 *   A string with all the characters to look for.
	 * @returns
	 *   Whether any of the given characters were found.
	 */
  public eatChars(chars: string): boolean {
    const codes = []
    for (let i = 0; i < chars.length; i++) {
      codes.push(chars.charCodeAt(i))
    }
    return this.eatCodePoints(...codes)
  }

  /**
	 * Eats any of the given characters.
	 *
	 * @param codes
	 *   The character codes to look for.
	 * @returns
	 *   Whether any of the given characters were found.
	 */
  public eatCodePoints(...codes: number[]): boolean {
    const prev = this._pos
    while (!this.eos && codes.indexOf(this.codePoints[this._pos]) !== -1) {
      this._pos++
    }
    return this._pos > prev
  }

  /**
	 * Skips while the given predicate matches.
	 */
  public eatWhile(predicate: Predicate): boolean {
    const prev = this._pos
    while (this.eat(predicate)) {}
    return this._pos > prev
  }

  /**
	 * Skips until the predicate matches.
	 */
  public eatUntil(predicate: Predicate): boolean {
    const prev = this._pos
    while (!this.match(predicate)) {
      this.next()
    }
    return this._pos > prev
  }

  /**
	 * Skips until EOL.
	 */
  public eatUntilEOL(): boolean {
    const prev = this._pos
    while (!this.eol) {
      this.next()
    }
    return this._pos > prev
  }

  /**
	 * Skips until EOS.
	 */
  public eatUntilEos(): boolean {
    const prev = this._pos
    this._pos = this.characters.length
    return this._pos > prev
  }

}