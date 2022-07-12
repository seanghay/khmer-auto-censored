import dictionary from "./dict.json"

export { dictionary }

function _removeZeroWidthSpace(input: string) {
	if (!input) return input
	return input.replace(/\u200b+/gm, "")
}

export function censored(input: string, delimiter: string = "."): string {
	if (typeof input !== "string") return input
	let result = input
	for (const item of dictionary) {
		const str = _removeZeroWidthSpace(item)
		const value = str.replace(/\{DEL\}/gm, "")
		const replacer = str.replace(/\{DEL\}/gm, delimiter)
		result = result.replace(new RegExp(value, "g"), replacer)
	}
	return result
}

export function uncensored(input: string, delimiter: string = ".") {
	if (typeof input !== "string") return input
	let result = input
	for (const item of dictionary) {
		const str = _removeZeroWidthSpace(item)
		const value = str.replace(/\{DEL\}/gm, "")
		const replacer = str.replace(/\{DEL\}/gm, delimiter)
		result = result.replace(new RegExp(replacer, "g"), value)
	}
	return result
}

