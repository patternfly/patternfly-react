const { Parser } = require("acorn")
const { generate } = require('astring')

const MyParser = Parser.extend(
    require("acorn-jsx")(),
    require("acorn-class-fields")
)

// const code = `
// let a = () => hi(<abc/>, '123');
// `
// const ast = MyParser.parse(code)
// console.log(ast)
// const generated = generate(ast)
// console.log(generated)

// Set example code
var code = 'let answer = 4 + 7 * 5 + 3;\n<asdf/>;'
// Parse it into an AST
var ast = MyParser.parse(code, { ecmaVersion: 6 })
// Format it into a code string
var formattedCode = generate(ast)
// Check it
console.log(code === formattedCode ? 'It works!' : 'Something went wrong…')