import {Command as Commander} from "commander"
import CommandDocument from "./CommandDocument"

const program = new Commander()

program
  .command('hello <messsage>')
  .description('just hello')
  .option("-t, --to <name>", "target user")
  .option("-s, --silent", "not say")
program
  .command('greet <message>')
  .description('just greet')

const template = `
{{#commands}}
### {{name}}

{{description}}

{{#options}}
#### {{{flags}}}

{{description}}
{{/options}}
{{/commands}}
`

const doc = CommandDocument.parse(program)
console.log(doc.render(template))
