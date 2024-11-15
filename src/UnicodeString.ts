import Range from './Range'
import { isSpace } from './testers'

/**
 * String with unicode support.
 */
export default class UnicodeString {

  //------
  // Construction

  constructor(string: string | UnicodeString = '') {
    if (string instanceof UnicodeString) {
      this.string = string.string
      this.charactersCache = string.charactersCache
      this.codePointsCache = string.codePointsCache
    } else {
      this.string = string
    }
  }

  //------
  // Properties

  /// The (non-unicde supporting) string.
  string: string

  /// The length of the string.
  get length(): number {
    return this.characters.length
  }

  /// The individual unicode characters in the string.
  get characters(): string[] {
    if (this.charactersCache == null) {
      this.charactersCache = [...this.string]
    }
    return this.charactersCache
  }

  /// The code points in the string.
  get codePoints(): number[] {
    if (this.codePointsCache == null) {
      this.codePointsCache = this.characters.map(c => c.codePointAt(0) as number)
    }
    return this.codePointsCache
  }

  charAt(pos: number): string {
    return this.characters[pos]
  }

  codePointAt(pos: number): number {
    return this.codePoints[pos]
  }

  charactersCache: string[] | null = null
  codePointsCache: number[] | null = null

  //------
  // Position converting

  ctpCache: number[] | null = null

  /// Converts a character index to a (native) string position.
  characterIndexToPos(index: number): number | null {
    if (this.ctpCache == null) {
      this.ctpCache = []
      for (let i = 0, pos = 0; i < this.characters.length; i++) {
        this.ctpCache.push(pos)
        pos += this.characters[i].length
      }
    }

    if (index === this.ctpCache.length) {
      return this.string.length
    } else if (index < this.ctpCache.length) {
      return this.ctpCache[index]
    } else {
      return null
    }
  }

  //------
  // Methods

  /// Slices the string. See `String.slice`.
  slice(base: number, extent?: number): UnicodeString {
    const chars = this.characters.slice(base, extent)
    return new UnicodeString(chars.join(''))
  }

  /// Takes a substring of the string. See `String.substr`.
  substr(start: number, length: number): UnicodeString {
    const chars = this.characters.slice(start, start + length)
    return new UnicodeString(chars.join(''))
  }

  /// Splits the string up using the given separator. The result will also be a UnicodeString
  /// instance.
  split(separator: string): UnicodeString[] {
    const separatorChars = [...separator]
    const result: UnicodeString[] = []

    let ch
    let start = 0
    let end = 0
    let separatorIndex = 0
    for (let i = 0; i < this.length; i++) {
      ch = this.characters[i]

      if (ch === separatorChars[separatorIndex]) {
        separatorIndex++
      } else {
        end = i + 1
      }

      if (separatorIndex === separatorChars.length) {
        // Split here.
        result.push(this.slice(start, end))
        start = i + 1
        end = start
        separatorIndex = 0
      }
    }
    result.push(this.slice(start, this.length))

    return result
  }

  /// Removes whitespace from the beginning and end of this string.
  trim(): UnicodeString {
    return this.trimStart().trimEnd()
  }

  /// Removes whitespace from the start of this string.
  trimStart(): UnicodeString {
    let start = 0
    while (isSpace(this.characters[start])) {
      start++
    }
    return this.slice(start)
  }

  /// Removes whitespace from the end of this string.
  trimEnd(): UnicodeString {
    let length = this.length
    while (isSpace(this.characters[length - 1])) {
      length--
    }
    return this.slice(0, length)
  }

  /// Inserts text in this string.
  insert(pos: number, string: string | UnicodeString): UnicodeString {
    const range = new Range(pos, pos)
    return this.replaceRange(range, string)
  }

  /// Replaces the range in this string.
  replaceRange(range: Range, newValue: string | UnicodeString): UnicodeString {
    const pre = this.slice(0, range.start)
    const post = this.slice(range.end)
    return new UnicodeString(`${pre}${newValue}${post}`)
  }

  /// Determines if this unicode string is equal to the given string.
  equals(other: string | UnicodeString): boolean {
    if (other instanceof UnicodeString) {
      return other.string === this.string
    } else {
      return other === this.string
    }
  }

  /// Replaces part of this string with another string.
  replace(pattern: string | RegExp, replacement: string): UnicodeString {
    return new UnicodeString(this.string.replace(pattern, replacement))
  }

  [Symbol.toPrimitive]() {
    return this.string
  }

  toString() {
    return this.string
  }

}