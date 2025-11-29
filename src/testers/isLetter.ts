export function isLetter(ch: string | null): boolean {
  if (ch == null) { return false }

  const code = ch.codePointAt(0)
  if (code == null) { return false }

  return false ||
		(code >= 0x0041 && code <= 0x005A) ||
		(code >= 0x0061 && code <= 0x007A) ||
		code === 0x00AA ||
		code === 0x00B5 ||
		code === 0x00BA ||
		(code >= 0x00C0 && code <= 0x00D6) ||
		(code >= 0x00D8 && code <= 0x00F6) ||
		(code >= 0x00F8 && code <= 0x02C1) ||
		(code >= 0x02C6 && code <= 0x02D1) ||
		(code >= 0x02E0 && code <= 0x02E4) ||
		code === 0x02EC ||
		code === 0x02EE ||
		(code >= 0x0370 && code <= 0x0374) ||
		code === 0x0376 ||
		code === 0x0377 ||
		(code >= 0x037A && code <= 0x037D) ||
		code === 0x0386 ||
		(code >= 0x0388 && code <= 0x038A) ||
		code === 0x038C ||
		(code >= 0x038E && code <= 0x03A1) ||
		(code >= 0x03A3 && code <= 0x03F5) ||
		(code >= 0x03F7 && code <= 0x0481) ||
		(code >= 0x048A && code <= 0x0527) ||
		(code >= 0x0531 && code <= 0x0556) ||
		code === 0x0559 ||
		(code >= 0x0561 && code <= 0x0587) ||
		(code >= 0x05D0 && code <= 0x05EA) ||
		(code >= 0x05F0 && code <= 0x05F2) ||
		(code >= 0x0620 && code <= 0x064A) ||
		code === 0x066E ||
		code === 0x066F ||
		(code >= 0x0671 && code <= 0x06D3) ||
		code === 0x06D5 ||
		code === 0x06E5 ||
		code === 0x06E6 ||
		code === 0x06EE ||
		code === 0x06EF ||
		(code >= 0x06FA && code <= 0x06FC) ||
		code === 0x06FF ||
		code === 0x0710 ||
		(code >= 0x0712 && code <= 0x072F) ||
		(code >= 0x074D && code <= 0x07A5) ||
		code === 0x07B1 ||
		(code >= 0x07CA && code <= 0x07EA) ||
		code === 0x07F4 ||
		code === 0x07F5 ||
		code === 0x07FA ||
		(code >= 0x0800 && code <= 0x0815) ||
		code === 0x081A ||
		code === 0x0824 ||
		code === 0x0828 ||
		(code >= 0x0840 && code <= 0x0858) ||
		code === 0x08A0 ||
		(code >= 0x08A2 && code <= 0x08AC) ||
		(code >= 0x0904 && code <= 0x0939) ||
		code === 0x093D ||
		code === 0x0950 ||
		(code >= 0x0958 && code <= 0x0961) ||
		(code >= 0x0971 && code <= 0x0977) ||
		(code >= 0x0979 && code <= 0x097F) ||
		(code >= 0x0985 && code <= 0x098C) ||
		code === 0x098F ||
		code === 0x0990 ||
		(code >= 0x0993 && code <= 0x09A8) ||
		(code >= 0x09AA && code <= 0x09B0) ||
		code === 0x09B2 ||
		(code >= 0x09B6 && code <= 0x09B9) ||
		code === 0x09BD ||
		code === 0x09CE ||
		code === 0x09DC ||
		code === 0x09DD ||
		(code >= 0x09DF && code <= 0x09E1) ||
		code === 0x09F0 ||
		code === 0x09F1 ||
		(code >= 0x0A05 && code <= 0x0A0A) ||
		code === 0x0A0F ||
		code === 0x0A10 ||
		(code >= 0x0A13 && code <= 0x0A28) ||
		(code >= 0x0A2A && code <= 0x0A30) ||
		code === 0x0A32 ||
		code === 0x0A33 ||
		code === 0x0A35 ||
		code === 0x0A36 ||
		code === 0x0A38 ||
		code === 0x0A39 ||
		(code >= 0x0A59 && code <= 0x0A5C) ||
		code === 0x0A5E ||
		(code >= 0x0A72 && code <= 0x0A74) ||
		(code >= 0x0A85 && code <= 0x0A8D) ||
		(code >= 0x0A8F && code <= 0x0A91) ||
		(code >= 0x0A93 && code <= 0x0AA8) ||
		(code >= 0x0AAA && code <= 0x0AB0) ||
		code === 0x0AB2 ||
		code === 0x0AB3 ||
		(code >= 0x0AB5 && code <= 0x0AB9) ||
		code === 0x0ABD ||
		code === 0x0AD0 ||
		code === 0x0AE0 ||
		code === 0x0AE1 ||
		(code >= 0x0B05 && code <= 0x0B0C) ||
		code === 0x0B0F ||
		code === 0x0B10 ||
		(code >= 0x0B13 && code <= 0x0B28) ||
		(code >= 0x0B2A && code <= 0x0B30) ||
		code === 0x0B32 ||
		code === 0x0B33 ||
		(code >= 0x0B35 && code <= 0x0B39) ||
		code === 0x0B3D ||
		code === 0x0B5C ||
		code === 0x0B5D ||
		(code >= 0x0B5F && code <= 0x0B61) ||
		code === 0x0B71 ||
		code === 0x0B83 ||
		(code >= 0x0B85 && code <= 0x0B8A) ||
		(code >= 0x0B8E && code <= 0x0B90) ||
		(code >= 0x0B92 && code <= 0x0B95) ||
		code === 0x0B99 ||
		code === 0x0B9A ||
		code === 0x0B9C ||
		code === 0x0B9E ||
		code === 0x0B9F ||
		code === 0x0BA3 ||
		code === 0x0BA4 ||
		(code >= 0x0BA8 && code <= 0x0BAA) ||
		(code >= 0x0BAE && code <= 0x0BB9) ||
		code === 0x0BD0 ||
		(code >= 0x0C05 && code <= 0x0C0C) ||
		(code >= 0x0C0E && code <= 0x0C10) ||
		(code >= 0x0C12 && code <= 0x0C28) ||
		(code >= 0x0C2A && code <= 0x0C33) ||
		(code >= 0x0C35 && code <= 0x0C39) ||
		code === 0x0C3D ||
		code === 0x0C58 ||
		code === 0x0C59 ||
		code === 0x0C60 ||
		code === 0x0C61 ||
		(code >= 0x0C85 && code <= 0x0C8C) ||
		(code >= 0x0C8E && code <= 0x0C90) ||
		(code >= 0x0C92 && code <= 0x0CA8) ||
		(code >= 0x0CAA && code <= 0x0CB3) ||
		(code >= 0x0CB5 && code <= 0x0CB9) ||
		code === 0x0CBD ||
		code === 0x0CDE ||
		code === 0x0CE0 ||
		code === 0x0CE1 ||
		code === 0x0CF1 ||
		code === 0x0CF2 ||
		(code >= 0x0D05 && code <= 0x0D0C) ||
		(code >= 0x0D0E && code <= 0x0D10) ||
		(code >= 0x0D12 && code <= 0x0D3A) ||
		code === 0x0D3D ||
		code === 0x0D4E ||
		code === 0x0D60 ||
		code === 0x0D61 ||
		(code >= 0x0D7A && code <= 0x0D7F) ||
		(code >= 0x0D85 && code <= 0x0D96) ||
		(code >= 0x0D9A && code <= 0x0DB1) ||
		(code >= 0x0DB3 && code <= 0x0DBB) ||
		code === 0x0DBD ||
		(code >= 0x0DC0 && code <= 0x0DC6) ||
		(code >= 0x0E01 && code <= 0x0E30) ||
		code === 0x0E32 ||
		code === 0x0E33 ||
		(code >= 0x0E40 && code <= 0x0E46) ||
		code === 0x0E81 ||
		code === 0x0E82 ||
		code === 0x0E84 ||
		code === 0x0E87 ||
		code === 0x0E88 ||
		code === 0x0E8A ||
		code === 0x0E8D ||
		(code >= 0x0E94 && code <= 0x0E97) ||
		(code >= 0x0E99 && code <= 0x0E9F) ||
		(code >= 0x0EA1 && code <= 0x0EA3) ||
		code === 0x0EA5 ||
		code === 0x0EA7 ||
		code === 0x0EAA ||
		code === 0x0EAB ||
		(code >= 0x0EAD && code <= 0x0EB0) ||
		code === 0x0EB2 ||
		code === 0x0EB3 ||
		code === 0x0EBD ||
		(code >= 0x0EC0 && code <= 0x0EC4) ||
		code === 0x0EC6 ||
		(code >= 0x0EDC && code <= 0x0EDF) ||
		code === 0x0F00 ||
		(code >= 0x0F40 && code <= 0x0F47) ||
		(code >= 0x0F49 && code <= 0x0F6C) ||
		(code >= 0x0F88 && code <= 0x0F8C) ||
		(code >= 0x1000 && code <= 0x102A) ||
		code === 0x103F ||
		(code >= 0x1050 && code <= 0x1055) ||
		(code >= 0x105A && code <= 0x105D) ||
		code === 0x1061 ||
		code === 0x1065 ||
		code === 0x1066 ||
		(code >= 0x106E && code <= 0x1070) ||
		(code >= 0x1075 && code <= 0x1081) ||
		code === 0x108E ||
		(code >= 0x10A0 && code <= 0x10C5) ||
		code === 0x10C7 ||
		code === 0x10CD ||
		(code >= 0x10D0 && code <= 0x10FA) ||
		(code >= 0x10FC && code <= 0x1248) ||
		(code >= 0x124A && code <= 0x124D) ||
		(code >= 0x1250 && code <= 0x1256) ||
		code === 0x1258 ||
		(code >= 0x125A && code <= 0x125D) ||
		(code >= 0x1260 && code <= 0x1288) ||
		(code >= 0x128A && code <= 0x128D) ||
		(code >= 0x1290 && code <= 0x12B0) ||
		(code >= 0x12B2 && code <= 0x12B5) ||
		(code >= 0x12B8 && code <= 0x12BE) ||
		code === 0x12C0 ||
		(code >= 0x12C2 && code <= 0x12C5) ||
		(code >= 0x12C8 && code <= 0x12D6) ||
		(code >= 0x12D8 && code <= 0x1310) ||
		(code >= 0x1312 && code <= 0x1315) ||
		(code >= 0x1318 && code <= 0x135A) ||
		(code >= 0x1380 && code <= 0x138F) ||
		(code >= 0x13A0 && code <= 0x13F4) ||
		(code >= 0x1401 && code <= 0x166C) ||
		(code >= 0x166F && code <= 0x167F) ||
		(code >= 0x1681 && code <= 0x169A) ||
		(code >= 0x16A0 && code <= 0x16EA) ||
		(code >= 0x16EE && code <= 0x16F0) ||
		(code >= 0x1700 && code <= 0x170C) ||
		(code >= 0x170E && code <= 0x1711) ||
		(code >= 0x1720 && code <= 0x1731) ||
		(code >= 0x1740 && code <= 0x1751) ||
		(code >= 0x1760 && code <= 0x176C) ||
		(code >= 0x176E && code <= 0x1770) ||
		(code >= 0x1780 && code <= 0x17B3) ||
		code === 0x17D7 ||
		code === 0x17DC ||
		(code >= 0x1820 && code <= 0x1877) ||
		(code >= 0x1880 && code <= 0x18A8) ||
		code === 0x18AA ||
		(code >= 0x18B0 && code <= 0x18F5) ||
		(code >= 0x1900 && code <= 0x191C) ||
		(code >= 0x1950 && code <= 0x196D) ||
		(code >= 0x1970 && code <= 0x1974) ||
		(code >= 0x1980 && code <= 0x19AB) ||
		(code >= 0x19C1 && code <= 0x19C7) ||
		(code >= 0x1A00 && code <= 0x1A16) ||
		(code >= 0x1A20 && code <= 0x1A54) ||
		code === 0x1AA7 ||
		(code >= 0x1B05 && code <= 0x1B33) ||
		(code >= 0x1B45 && code <= 0x1B4B) ||
		(code >= 0x1B83 && code <= 0x1BA0) ||
		code === 0x1BAE ||
		code === 0x1BAF ||
		(code >= 0x1BBA && code <= 0x1BE5) ||
		(code >= 0x1C00 && code <= 0x1C23) ||
		(code >= 0x1C4D && code <= 0x1C4F) ||
		(code >= 0x1C5A && code <= 0x1C7D) ||
		(code >= 0x1CE9 && code <= 0x1CEC) ||
		(code >= 0x1CEE && code <= 0x1CF1) ||
		code === 0x1CF5 ||
		code === 0x1CF6 ||
		(code >= 0x1D00 && code <= 0x1DBF) ||
		(code >= 0x1E00 && code <= 0x1F15) ||
		(code >= 0x1F18 && code <= 0x1F1D) ||
		(code >= 0x1F20 && code <= 0x1F45) ||
		(code >= 0x1F48 && code <= 0x1F4D) ||
		(code >= 0x1F50 && code <= 0x1F57) ||
		code === 0x1F59 ||
		code === 0x1F5B ||
		code === 0x1F5D ||
		(code >= 0x1F5F && code <= 0x1F7D) ||
		(code >= 0x1F80 && code <= 0x1FB4) ||
		(code >= 0x1FB6 && code <= 0x1FBC) ||
		code === 0x1FBE ||
		(code >= 0x1FC2 && code <= 0x1FC4) ||
		(code >= 0x1FC6 && code <= 0x1FCC) ||
		(code >= 0x1FD0 && code <= 0x1FD3) ||
		(code >= 0x1FD6 && code <= 0x1FDB) ||
		(code >= 0x1FE0 && code <= 0x1FEC) ||
		(code >= 0x1FF2 && code <= 0x1FF4) ||
		(code >= 0x1FF6 && code <= 0x1FFC) ||
		code === 0x2071 ||
		code === 0x207F ||
		(code >= 0x2090 && code <= 0x209C) ||
		code === 0x2102 ||
		code === 0x2107 ||
		(code >= 0x210A && code <= 0x2113) ||
		code === 0x2115 ||
		(code >= 0x2119 && code <= 0x211D) ||
		code === 0x2124 ||
		code === 0x2126 ||
		code === 0x2128 ||
		(code >= 0x212A && code <= 0x212D) ||
		(code >= 0x212F && code <= 0x2139) ||
		(code >= 0x213C && code <= 0x213F) ||
		(code >= 0x2145 && code <= 0x2149) ||
		code === 0x214E ||
		(code >= 0x2160 && code <= 0x2188) ||
		(code >= 0x2C00 && code <= 0x2C2E) ||
		(code >= 0x2C30 && code <= 0x2C5E) ||
		(code >= 0x2C60 && code <= 0x2CE4) ||
		(code >= 0x2CEB && code <= 0x2CEE) ||
		code === 0x2CF2 ||
		code === 0x2CF3 ||
		(code >= 0x2D00 && code <= 0x2D25) ||
		code === 0x2D27 ||
		code === 0x2D2D ||
		(code >= 0x2D30 && code <= 0x2D67) ||
		code === 0x2D6F ||
		(code >= 0x2D80 && code <= 0x2D96) ||
		(code >= 0x2DA0 && code <= 0x2DA6) ||
		(code >= 0x2DA8 && code <= 0x2DAE) ||
		(code >= 0x2DB0 && code <= 0x2DB6) ||
		(code >= 0x2DB8 && code <= 0x2DBE) ||
		(code >= 0x2DC0 && code <= 0x2DC6) ||
		(code >= 0x2DC8 && code <= 0x2DCE) ||
		(code >= 0x2DD0 && code <= 0x2DD6) ||
		(code >= 0x2DD8 && code <= 0x2DDE) ||
		code === 0x2E2F ||
		(code >= 0x3005 && code <= 0x3007) ||
		(code >= 0x3021 && code <= 0x3029) ||
		(code >= 0x3031 && code <= 0x3035) ||
		(code >= 0x3038 && code <= 0x303C) ||
		(code >= 0x3041 && code <= 0x3096) ||
		(code >= 0x309D && code <= 0x309F) ||
		(code >= 0x30A1 && code <= 0x30FA) ||
		(code >= 0x30FC && code <= 0x30FF) ||
		(code >= 0x3105 && code <= 0x312D) ||
		(code >= 0x3131 && code <= 0x318E) ||
		(code >= 0x31A0 && code <= 0x31BA) ||
		(code >= 0x31F0 && code <= 0x31FF) ||
		(code >= 0x3400 && code <= 0x4DB5) ||
		(code >= 0x4E00 && code <= 0x9FCC) ||
		(code >= 0xA000 && code <= 0xA48C) ||
		(code >= 0xA4D0 && code <= 0xA4FD) ||
		(code >= 0xA500 && code <= 0xA60C) ||
		(code >= 0xA610 && code <= 0xA61F) ||
		code === 0xA62A ||
		code === 0xA62B ||
		(code >= 0xA640 && code <= 0xA66E) ||
		(code >= 0xA67F && code <= 0xA697) ||
		(code >= 0xA6A0 && code <= 0xA6EF) ||
		(code >= 0xA717 && code <= 0xA71F) ||
		(code >= 0xA722 && code <= 0xA788) ||
		(code >= 0xA78B && code <= 0xA78E) ||
		(code >= 0xA790 && code <= 0xA793) ||
		(code >= 0xA7A0 && code <= 0xA7AA) ||
		(code >= 0xA7F8 && code <= 0xA801) ||
		(code >= 0xA803 && code <= 0xA805) ||
		(code >= 0xA807 && code <= 0xA80A) ||
		(code >= 0xA80C && code <= 0xA822) ||
		(code >= 0xA840 && code <= 0xA873) ||
		(code >= 0xA882 && code <= 0xA8B3) ||
		(code >= 0xA8F2 && code <= 0xA8F7) ||
		code === 0xA8FB ||
		(code >= 0xA90A && code <= 0xA925) ||
		(code >= 0xA930 && code <= 0xA946) ||
		(code >= 0xA960 && code <= 0xA97C) ||
		(code >= 0xA984 && code <= 0xA9B2) ||
		code === 0xA9CF ||
		(code >= 0xAA00 && code <= 0xAA28) ||
		(code >= 0xAA40 && code <= 0xAA42) ||
		(code >= 0xAA44 && code <= 0xAA4B) ||
		(code >= 0xAA60 && code <= 0xAA76) ||
		code === 0xAA7A ||
		(code >= 0xAA80 && code <= 0xAAAF) ||
		code === 0xAAB1 ||
		code === 0xAAB5 ||
		code === 0xAAB6 ||
		(code >= 0xAAB9 && code <= 0xAABD) ||
		code === 0xAAC0 ||
		code === 0xAAC2 ||
		(code >= 0xAADB && code <= 0xAADD) ||
		(code >= 0xAAE0 && code <= 0xAAEA) ||
		(code >= 0xAAF2 && code <= 0xAAF4) ||
		(code >= 0xAB01 && code <= 0xAB06) ||
		(code >= 0xAB09 && code <= 0xAB0E) ||
		(code >= 0xAB11 && code <= 0xAB16) ||
		(code >= 0xAB20 && code <= 0xAB26) ||
		(code >= 0xAB28 && code <= 0xAB2E) ||
		(code >= 0xABC0 && code <= 0xABE2) ||
		(code >= 0xAC00 && code <= 0xD7A3) ||
		(code >= 0xD7B0 && code <= 0xD7C6) ||
		(code >= 0xD7CB && code <= 0xD7FB) ||
		(code >= 0xF900 && code <= 0xFA6D) ||
		(code >= 0xFA70 && code <= 0xFAD9) ||
		(code >= 0xFB00 && code <= 0xFB06) ||
		(code >= 0xFB13 && code <= 0xFB17) ||
		code === 0xFB1D ||
		(code >= 0xFB1F && code <= 0xFB28) ||
		(code >= 0xFB2A && code <= 0xFB36) ||
		(code >= 0xFB38 && code <= 0xFB3C) ||
		code === 0xFB3E ||
		code === 0xFB40 ||
		code === 0xFB41 ||
		code === 0xFB43 ||
		code === 0xFB44 ||
		(code >= 0xFB46 && code <= 0xFBB1) ||
		(code >= 0xFBD3 && code <= 0xFD3D) ||
		(code >= 0xFD50 && code <= 0xFD8F) ||
		(code >= 0xFD92 && code <= 0xFDC7) ||
		(code >= 0xFDF0 && code <= 0xFDFB) ||
		(code >= 0xFE70 && code <= 0xFE74) ||
		(code >= 0xFE76 && code <= 0xFEFC) ||
		(code >= 0xFF21 && code <= 0xFF3A) ||
		(code >= 0xFF41 && code <= 0xFF5A) ||
		(code >= 0xFF66 && code <= 0xFFBE) ||
		(code >= 0xFFC2 && code <= 0xFFC7) ||
		(code >= 0xFFCA && code <= 0xFFCF) ||
		(code >= 0xFFD2 && code <= 0xFFD7) ||
		(code >= 0xFFDA && code <= 0xFFDC)
}