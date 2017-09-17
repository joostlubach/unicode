// @flow

// Many thanks to Mathias Bynens for this research, and all the emoji code points.
// https://mathiasbynens.be/notes/javascript-unicode

import emojiCodePoints from 'unicode-tr51/Emoji'

// These have moved to their own file as they're quite big.
// @index
export {default as isCombiningMark} from './isCombiningMark'
export {default as isConnectorPunctuation} from './isConnectorPunctuation'
export {default as isDigit} from './isDigit'
export {default as isLetter} from './isLetter'
// /index

const EMOJI_MAP: Map<number, boolean | Map<number, boolean>> = new Map()
for (let point of emojiCodePoints) {
	EMOJI_MAP.set(point, true)
}

export function isSpace(ch: ?string) {
	if (ch == null) { return false }

	const code = ch.codePointAt(0)
	return isSpaceCode(code)
}

export function isSpaceCode(code: number) {
	return code === 0x0009 || code === 0x000A || code === 0x000B || code === 0x000C || code === 0x000D || code === 0x0020 || code === 0x0085 || code === 0x00A0 || code === 0x1680 || code === 0x2000 || code === 0x2001 || code === 0x2002 || code === 0x2003 || code === 0x2004 || code === 0x2005 || code === 0x2006 || code === 0x2007 || code === 0x2008 || code === 0x2009 || code === 0x200A || code === 0x2028 || code === 0x2029 || code === 0x202F || code === 0x205F || code === 0x3000
}

export function isEmoji(ch: ?string) {
	if (ch == null) { return false }

	const code0 = ch.codePointAt(0)
	const code1 = ch.codePointAt(2)

	if (EMOJI_MAP.get(code0) === true) {
		return true
	} else {
		const map = EMOJI_MAP.get(code0)
		return map == null ? false : map.has(code1)
	}
}