export default function isDigit(ch: string | null): boolean {
  if (ch == null) { return false }

  const code = ch.codePointAt(0)
  if (code == null) { return false }

  return false ||
		(code >= 0x0030 && code <= 0x0039) ||
		(code >= 0x0660 && code <= 0x0669) ||
		(code >= 0x06F0 && code <= 0x06F9) ||
		(code >= 0x07C0 && code <= 0x07C9) ||
		(code >= 0x0966 && code <= 0x096F) ||
		(code >= 0x09E6 && code <= 0x09EF) ||
		(code >= 0x0A66 && code <= 0x0A6F) ||
		(code >= 0x0AE6 && code <= 0x0AEF) ||
		(code >= 0x0B66 && code <= 0x0B6F) ||
		(code >= 0x0BE6 && code <= 0x0BEF) ||
		(code >= 0x0C66 && code <= 0x0C6F) ||
		(code >= 0x0CE6 && code <= 0x0CEF) ||
		(code >= 0x0D66 && code <= 0x0D6F) ||
		(code >= 0x0E50 && code <= 0x0E59) ||
		(code >= 0x0ED0 && code <= 0x0ED9) ||
		(code >= 0x0F20 && code <= 0x0F29) ||
		(code >= 0x1040 && code <= 0x1049) ||
		(code >= 0x1090 && code <= 0x1099) ||
		(code >= 0x17E0 && code <= 0x17E9) ||
		(code >= 0x1810 && code <= 0x1819) ||
		(code >= 0x1946 && code <= 0x194F) ||
		(code >= 0x19D0 && code <= 0x19D9) ||
		(code >= 0x1A80 && code <= 0x1A89) ||
		(code >= 0x1A90 && code <= 0x1A99) ||
		(code >= 0x1B50 && code <= 0x1B59) ||
		(code >= 0x1BB0 && code <= 0x1BB9) ||
		(code >= 0x1C40 && code <= 0x1C49) ||
		(code >= 0x1C50 && code <= 0x1C59) ||
		(code >= 0xA620 && code <= 0xA629) ||
		(code >= 0xA8D0 && code <= 0xA8D9) ||
		(code >= 0xA900 && code <= 0xA909) ||
		(code >= 0xA9D0 && code <= 0xA9D9) ||
		(code >= 0xAA50 && code <= 0xAA59) ||
		(code >= 0xABF0 && code <= 0xABF9) ||
		(code >= 0xFF10 && code <= 0xFF19)
}