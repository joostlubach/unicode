// Many thanks to Mathias Bynens for this research, and all the emoji code points.
// https://mathiasbynens.be/notes/javascript-unicode

import { Predicate, Token } from './'
import Range from './Range'
import UnicodeString from './UnicodeString'

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

  constructor(source: string | UnicodeString | StringStream) {
    if (source instanceof UnicodeString) {
      this.string = source
    } else if (source instanceof StringStream) {
      this.string = source.string
      this.pos = source.pos
      this.start = source.start
    } else {
      this.string = new UnicodeString(source)
    }

    this.characters = this.string.characters
    this.codePoints = this.string.codePoints
  }

  string:     UnicodeString
  characters: string[]
  codePoints: number[]
  pos = 0
  start = 0

  /** Start of string. */
  get sos(): boolean { return this.pos === 0 }

  /** End of string. */
  get eos(): boolean { return this.pos >= this.characters.length }

  /** Start of line. */
  get sol(): boolean { return this.sos || this.codePoints[this.pos - 1] === CHARS.newline }

  /** End of line. */
  get eol(): boolean { return this.eos || this.codePoints[this.pos] === CHARS.newline }

  /**
	 * Gets the current stream range.
	 */
  get range(): Range {
    return new Range(this.start, this.pos)
  }

  /**
	 * Gets the remainder of the string from the current position.
	 */
  get remainder(): string {
    return this.slice(this.pos)
  }

  //-----
  // Positions

  /**
	 * Marks the current position as the start position for slicing.
	 */
  markStart() {
    this.start = this.pos
  }

  /**
	 * Returns the next (count) characters and advances, if possible.
	 */
  next(count: number = 1): string | null {
    if (this.pos > this.characters.length - count) {
      return null
    }

    this.pos += count
    return this.substr(this.pos - count, count)
  }

  /**
	 * Resets the stream back to its default.
	 */
  reset() {
    this.pos = 0
    this.start = 0
  }

  //------
  // Slices

  /**
	 * Creates a slice of our string. Use this instead of `this.string.slice`, as this version supports
	 * unicode.
	 */
  slice(base: number, extent: number = -1, multiline: boolean = false): string {
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
      if (!multiline && this.characters[i].codePointAt(0) === CHARS.newline) {
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
  substr(start: number, length: number, multiline: boolean = false): string {
    return this.slice(start, start + length, multiline)
  }

  //------
  // Value retrieval

  /**
	 * Gets the current slice of the string, that is, the slice between the slice start position
	 * and the current position.
	 */
  current() {
    return this.slice(this.start, this.pos)
  }

  /**
	 * Creates a token from the current stream state.
	 */
  token(extra: Object): Token {
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
	 * @param predicate
	 *   A string or regular expression to look for.
	 * @param multiline
	 *   Set this to true to eat beyond the end of the line.
	 * @returns
	 *   The content of the match, or `null` if the match failed.
	 */
  match(predicate: Predicate, lookahead: number = 0, multiline: boolean = false): string | null {
    if (predicate instanceof RegExp) {
      const match = this.slice(this.pos + lookahead, -1, multiline).match(predicate)
      return match != null && match.index === 0 ? match[0] : null
    } else if (predicate instanceof Function) {
      const nextChar = this.peek()
      if (nextChar && predicate(nextChar)) {
        return this.substr(this.pos, 1)
      }
    } else {
      const slice = this.substr(this.pos + lookahead, predicate.length, multiline)
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
  peek(count: number = 1): string | null {
    if (this.pos > this.characters.length - count) {
      return null
    } else {
      return this.substr(this.pos, count)
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
  eat(predicate: Predicate, multiline: boolean = false): string | null {
    if (predicate instanceof RegExp) {
      const match = this.slice(this.pos, -1, multiline).match(predicate)
      if (match != null && match.index === 0) {
        this.pos += match[0].length
        return match[0]
      }
    } else if (predicate instanceof Function) {
      const nextChar = this.peek()
      if (nextChar != null && predicate(nextChar)) {
        this.pos += 1
        return this.substr(this.pos - 1, 1)
      }
    } else {
      const slice = this.substr(this.pos, predicate.length, multiline)
      if (slice === predicate) {
        this.pos += predicate.length
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
  eatSpace(): boolean {
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
  eatChars(chars: string): boolean {
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
  eatCodePoints(...codes: number[]): boolean {
    const prev = this.pos
    while (!this.eos && codes.indexOf(this.codePoints[this.pos]) !== -1) {
      this.pos++
    }
    return this.pos > prev
  }

  /**
	 * Skips while the given predicate matches.
	 */
  eatWhile(predicate: Predicate): boolean {
    const prev = this.pos
    while (this.eat(predicate)) {}
    return this.pos > prev
  }

  /**
	 * Skips until the predicate matches.
	 */
  eatUntil(predicate: Predicate): boolean {
    const prev = this.pos
    while (!this.match(predicate)) {
      this.next()
    }
    return this.pos > prev
  }

  /**
	 * Skips until EOL.
	 */
  eatUntilEOL(): boolean {
    const prev = this.pos
    while (!this.eol) {
      this.next()
    }
    return this.pos > prev
  }

  /**
	 * Skips until EOS.
	 */
  eatUntilEos(): boolean {
    const prev = this.pos
    this.pos = this.characters.length
    return this.pos > prev
  }

}