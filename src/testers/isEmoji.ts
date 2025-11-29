// Many thanks to Mathias Bynens for this research, and all the emoji code points.
// https://mathiasbynens.be/notes/javascript-unicode

import emojiCodePoints from '@unicode/unicode-17.0.0/Binary_Property/Emoji/code-points'
import emojiComponentCodePoints from '@unicode/unicode-17.0.0/Binary_Property/Emoji_Component/code-points'
import emojiModifierCodePoints from '@unicode/unicode-17.0.0/Binary_Property/Emoji_Modifier/code-points'

const EMOJI_SET = new Set<number>([
  ...emojiCodePoints,
  ...emojiComponentCodePoints,
  ...emojiModifierCodePoints,
])

export function isEmoji(ch: string | null) {
  if (ch == null || ch.length === 0) { return false }

  const codePoint = ch.codePointAt(0)
  if (codePoint == null) { return false }

  return EMOJI_SET.has(codePoint)
}

Object.assign(globalThis, {isEmoji})