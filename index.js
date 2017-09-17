// @flow

import type {Range} from './src'

export * from './src'

export type Token     = {range: Range, text: string}
export type Predicate = (ch: string) => boolean | string | RegExp