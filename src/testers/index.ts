
// These have moved to their own file as they're quite big.
// @index
export * from './isCombiningMark'
export * from './isConnectorPunctuation'
export * from './isDigit'
export * from './isEmoji'
export * from './isLetter'
// /index

export function isSpace(ch: string | null) {
  if (ch == null) { return false }

  const code = ch.codePointAt(0)
  if (code == null) { return false }

  return isSpaceCode(code)
}

export function isSpaceCode(code: number) {
  return code === 0x0009 || code === 0x000A || code === 0x000B || code === 0x000C || code === 0x000D || code === 0x0020 || code === 0x0085 || code === 0x00A0 || code === 0x1680 || code === 0x2000 || code === 0x2001 || code === 0x2002 || code === 0x2003 || code === 0x2004 || code === 0x2005 || code === 0x2006 || code === 0x2007 || code === 0x2008 || code === 0x2009 || code === 0x200A || code === 0x2028 || code === 0x2029 || code === 0x202F || code === 0x205F || code === 0x3000
}
