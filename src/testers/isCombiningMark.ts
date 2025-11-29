export function isCombiningMark(ch: string | null): boolean {
  if (ch == null) { return false }

  const code = ch.codePointAt(0)
  if (code == null) { return false }

  return false ||
		(code >= 0x0300 && code <= 0x036F) ||
		(code >= 0x0483 && code <= 0x0487) ||
		(code >= 0x0591 && code <= 0x05BD) ||
		code === 0x05BF ||
		code === 0x05C1 ||
		code === 0x05C2 ||
		code === 0x05C4 ||
		code === 0x05C5 ||
		code === 0x05C7 ||
		(code >= 0x0610 && code <= 0x061A) ||
		(code >= 0x064B && code <= 0x065F) ||
		code === 0x0670 ||
		(code >= 0x06D6 && code <= 0x06DC) ||
		(code >= 0x06DF && code <= 0x06E4) ||
		code === 0x06E7 ||
		code === 0x06E8 ||
		(code >= 0x06EA && code <= 0x06ED) ||
		code === 0x0711 ||
		(code >= 0x0730 && code <= 0x074A) ||
		(code >= 0x07A6 && code <= 0x07B0) ||
		(code >= 0x07EB && code <= 0x07F3) ||
		(code >= 0x0816 && code <= 0x0819) ||
		(code >= 0x081B && code <= 0x0823) ||
		(code >= 0x0825 && code <= 0x0827) ||
		(code >= 0x0829 && code <= 0x082D) ||
		(code >= 0x0859 && code <= 0x085B) ||
		(code >= 0x08E4 && code <= 0x08FE) ||
		(code >= 0x0900 && code <= 0x0903) ||
		(code >= 0x093A && code <= 0x093C) ||
		(code >= 0x093E && code <= 0x094F) ||
		(code >= 0x0951 && code <= 0x0957) ||
		code === 0x0962 ||
		code === 0x0963 ||
		(code >= 0x0981 && code <= 0x0983) ||
		code === 0x09BC ||
		(code >= 0x09BE && code <= 0x09C4) ||
		code === 0x09C7 ||
		code === 0x09C8 ||
		(code >= 0x09CB && code <= 0x09CD) ||
		code === 0x09D7 ||
		code === 0x09E2 ||
		code === 0x09E3 ||
		(code >= 0x0A01 && code <= 0x0A03) ||
		code === 0x0A3C ||
		(code >= 0x0A3E && code <= 0x0A42) ||
		code === 0x0A47 ||
		code === 0x0A48 ||
		(code >= 0x0A4B && code <= 0x0A4D) ||
		code === 0x0A51 ||
		code === 0x0A70 ||
		code === 0x0A71 ||
		code === 0x0A75 ||
		(code >= 0x0A81 && code <= 0x0A83) ||
		code === 0x0ABC ||
		(code >= 0x0ABE && code <= 0x0AC5) ||
		(code >= 0x0AC7 && code <= 0x0AC9) ||
		(code >= 0x0ACB && code <= 0x0ACD) ||
		code === 0x0AE2 ||
		code === 0x0AE3 ||
		(code >= 0x0B01 && code <= 0x0B03) ||
		code === 0x0B3C ||
		(code >= 0x0B3E && code <= 0x0B44) ||
		code === 0x0B47 ||
		code === 0x0B48 ||
		(code >= 0x0B4B && code <= 0x0B4D) ||
		code === 0x0B56 ||
		code === 0x0B57 ||
		code === 0x0B62 ||
		code === 0x0B63 ||
		code === 0x0B82 ||
		(code >= 0x0BBE && code <= 0x0BC2) ||
		(code >= 0x0BC6 && code <= 0x0BC8) ||
		(code >= 0x0BCA && code <= 0x0BCD) ||
		code === 0x0BD7 ||
		(code >= 0x0C01 && code <= 0x0C03) ||
		(code >= 0x0C3E && code <= 0x0C44) ||
		(code >= 0x0C46 && code <= 0x0C48) ||
		(code >= 0x0C4A && code <= 0x0C4D) ||
		code === 0x0C55 ||
		code === 0x0C56 ||
		code === 0x0C62 ||
		code === 0x0C63 ||
		code === 0x0C82 ||
		code === 0x0C83 ||
		code === 0x0CBC ||
		(code >= 0x0CBE && code <= 0x0CC4) ||
		(code >= 0x0CC6 && code <= 0x0CC8) ||
		(code >= 0x0CCA && code <= 0x0CCD) ||
		code === 0x0CD5 ||
		code === 0x0CD6 ||
		code === 0x0CE2 ||
		code === 0x0CE3 ||
		code === 0x0D02 ||
		code === 0x0D03 ||
		(code >= 0x0D3E && code <= 0x0D44) ||
		(code >= 0x0D46 && code <= 0x0D48) ||
		(code >= 0x0D4A && code <= 0x0D4D) ||
		code === 0x0D57 ||
		code === 0x0D62 ||
		code === 0x0D63 ||
		code === 0x0D82 ||
		code === 0x0D83 ||
		code === 0x0DCA ||
		(code >= 0x0DCF && code <= 0x0DD4) ||
		code === 0x0DD6 ||
		(code >= 0x0DD8 && code <= 0x0DDF) ||
		code === 0x0DF2 ||
		code === 0x0DF3 ||
		code === 0x0E31 ||
		(code >= 0x0E34 && code <= 0x0E3A) ||
		(code >= 0x0E47 && code <= 0x0E4E) ||
		code === 0x0EB1 ||
		(code >= 0x0EB4 && code <= 0x0EB9) ||
		code === 0x0EBB ||
		code === 0x0EBC ||
		(code >= 0x0EC8 && code <= 0x0ECD) ||
		code === 0x0F18 ||
		code === 0x0F19 ||
		code === 0x0F35 ||
		code === 0x0F37 ||
		code === 0x0F39 ||
		code === 0x0F3E ||
		code === 0x0F3F ||
		(code >= 0x0F71 && code <= 0x0F84) ||
		code === 0x0F86 ||
		code === 0x0F87 ||
		(code >= 0x0F8D && code <= 0x0F97) ||
		(code >= 0x0F99 && code <= 0x0FBC) ||
		code === 0x0FC6 ||
		(code >= 0x102B && code <= 0x103E) ||
		(code >= 0x1056 && code <= 0x1059) ||
		(code >= 0x105E && code <= 0x1060) ||
		(code >= 0x1062 && code <= 0x1064) ||
		(code >= 0x1067 && code <= 0x106D) ||
		(code >= 0x1071 && code <= 0x1074) ||
		(code >= 0x1082 && code <= 0x108D) ||
		code === 0x108F ||
		(code >= 0x109A && code <= 0x109D) ||
		(code >= 0x135D && code <= 0x135F) ||
		(code >= 0x1712 && code <= 0x1714) ||
		(code >= 0x1732 && code <= 0x1734) ||
		code === 0x1752 ||
		code === 0x1753 ||
		code === 0x1772 ||
		code === 0x1773 ||
		(code >= 0x17B4 && code <= 0x17D3) ||
		code === 0x17DD ||
		(code >= 0x180B && code <= 0x180D) ||
		code === 0x18A9 ||
		(code >= 0x1920 && code <= 0x192B) ||
		(code >= 0x1930 && code <= 0x193B) ||
		(code >= 0x19B0 && code <= 0x19C0) ||
		code === 0x19C8 ||
		code === 0x19C9 ||
		(code >= 0x1A17 && code <= 0x1A1B) ||
		(code >= 0x1A55 && code <= 0x1A5E) ||
		(code >= 0x1A60 && code <= 0x1A7C) ||
		code === 0x1A7F ||
		(code >= 0x1B00 && code <= 0x1B04) ||
		(code >= 0x1B34 && code <= 0x1B44) ||
		(code >= 0x1B6B && code <= 0x1B73) ||
		(code >= 0x1B80 && code <= 0x1B82) ||
		(code >= 0x1BA1 && code <= 0x1BAD) ||
		(code >= 0x1BE6 && code <= 0x1BF3) ||
		(code >= 0x1C24 && code <= 0x1C37) ||
		(code >= 0x1CD0 && code <= 0x1CD2) ||
		(code >= 0x1CD4 && code <= 0x1CE8) ||
		code === 0x1CED ||
		(code >= 0x1CF2 && code <= 0x1CF4) ||
		(code >= 0x1DC0 && code <= 0x1DE6) ||
		(code >= 0x1DFC && code <= 0x1DFF) ||
		(code >= 0x20D0 && code <= 0x20DC) ||
		code === 0x20E1 ||
		(code >= 0x20E5 && code <= 0x20F0) ||
		(code >= 0x2CEF && code <= 0x2CF1) ||
		code === 0x2D7F ||
		(code >= 0x2DE0 && code <= 0x2DFF) ||
		(code >= 0x302A && code <= 0x302F) ||
		code === 0x3099 ||
		code === 0x309A ||
		code === 0xA66F ||
		(code >= 0xA674 && code <= 0xA67D) ||
		code === 0xA69F ||
		code === 0xA6F0 ||
		code === 0xA6F1 ||
		code === 0xA802 ||
		code === 0xA806 ||
		code === 0xA80B ||
		(code >= 0xA823 && code <= 0xA827) ||
		code === 0xA880 ||
		code === 0xA881 ||
		(code >= 0xA8B4 && code <= 0xA8C4) ||
		(code >= 0xA8E0 && code <= 0xA8F1) ||
		(code >= 0xA926 && code <= 0xA92D) ||
		(code >= 0xA947 && code <= 0xA953) ||
		(code >= 0xA980 && code <= 0xA983) ||
		(code >= 0xA9B3 && code <= 0xA9C0) ||
		(code >= 0xAA29 && code <= 0xAA36) ||
		code === 0xAA43 ||
		code === 0xAA4C ||
		code === 0xAA4D ||
		code === 0xAA7B ||
		code === 0xAAB0 ||
		(code >= 0xAAB2 && code <= 0xAAB4) ||
		code === 0xAAB7 ||
		code === 0xAAB8 ||
		code === 0xAABE ||
		code === 0xAABF ||
		code === 0xAAC1 ||
		(code >= 0xAAEB && code <= 0xAAEF) ||
		code === 0xAAF5 ||
		code === 0xAAF6 ||
		(code >= 0xABE3 && code <= 0xABEA) ||
		code === 0xABEC ||
		code === 0xABED ||
		code === 0xFB1E ||
		(code >= 0xFE00 && code <= 0xFE0F) ||
		(code >= 0xFE20 && code <= 0xFE26)
}