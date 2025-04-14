import { Range } from './'

export interface Token {
  range: Range
  text:  string

  [key: string]: any
}

export type Predicate = string | RegExp | ((ch: string) => boolean)

export interface StringStreamOptions {
  multiline?: boolean
}