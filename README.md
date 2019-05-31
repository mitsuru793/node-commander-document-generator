# Commander Document Generator

This generates document for [tj/commander\.js](https://github.com/tj/commander.js/). It helps you to write sections of command guide on README.md.

# Installation

```
$ yarn add commander-document-generator
```

# Write template

You must write a template for a command with [janl/mustache\.js](https://github.com/janl/mustache.js/).

You can use a variable 'command' in template. The following is property list of 'command'.

**Command**
* name: string
* args: Argument[]
* options: Option[]
* description: string

**Argument**
* name: string
* display: boolean
* required: boolean
* variadic: boolean

**Option**
* flags: string
* required: boolean
* optional: boolean
* bool: boolean
* short?: string
* long: string
* description: string

## Example

```typescript
import {Command as Commander} from "commander"
import CommandDocument from "commander-document-genertor"

const program = new Commander()

program
  .command('hello <message>')
  .description('just hello')
  .option("-t, --to <name>", "target user")
  .option("-s, --silent", "not say")

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

const doc = CommandDocument.parse(program)
console.log(doc.render(template))
```

output
```
### hello <message>

just hello

#### -t, --to <name>

target user

#### -s, --silent

not say
```
