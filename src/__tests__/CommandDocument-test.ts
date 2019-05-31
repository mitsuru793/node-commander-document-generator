import {Command as Commander} from "commander"
import {CommandDocument} from "../index"

const program = new Commander()
program
  .command('hello <message>')
  .description('just hello')
  .option("-t, --to <name>", "target user")
  .option("-s, --silent", "not say")
program
  .command('greet [message]')
  .description('just greet')

describe('CommandDocument', () => {
  test('parse template and render it', () => {
    const doc = CommandDocument.parse(program)
    const template = `
{{#commands}}
### {{name}} {{{args.0.display}}}

{{description}}

{{#options}}
#### {{{flags}}}

{{description}}

{{/options}}
{{/commands}}
`
    const output = doc.render(template)
    const expected = `
### hello <message>

just hello

#### -t, --to <name>

target user

#### -s, --silent

not say

### greet [message]

just greet
    `.trim()
    expect(output).toBe(expected)
  })
})
