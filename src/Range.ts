export default class Range {

	constructor(base: number, extent: number) {
		this.base = base
		this.extent   = extent
	}

	base:   number
	extent: number

	get start(): number {
		return Math.min(this.base, this.extent)
	}

	get end(): number {
		return Math.max(this.base, this.extent)
	}

	get empty(): boolean {
		return this.start === this.end
	}

}