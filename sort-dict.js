const fs = require("fs")

const dict = JSON.parse(
	fs.readFileSync("./src/dict.json", { encoding: "utf-8" })
)

const sorted = JSON.stringify(
  [...new Set(dict.map(it => it.replace(/\u200b/g, '')))].sort(),
  null,
  2
)

fs.writeFileSync('./src/dict.json', sorted)
