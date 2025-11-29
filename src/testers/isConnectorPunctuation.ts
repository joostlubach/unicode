export function isConnectorPunctuation(ch: string | null): boolean {
  if (ch == null) { return false }

  const code = ch.codePointAt(0)
  if (code == null) { return false }

  return false ||
		code === 0x005F ||
		code === 0x203F ||
		code === 0x2040 ||
		code === 0x2054 ||
		code === 0xFE33 ||
		code === 0xFE34 ||
		(code >= 0xFE4D && code <= 0xFE4F) ||
		code === 0xFF3F
}