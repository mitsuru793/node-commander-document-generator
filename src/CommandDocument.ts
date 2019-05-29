import * as Mustache from "mustache"
import {Command as Commander, Option} from "commander"
import Command from "./Command"
import Argument from "./Argument"

export default class CommandDocument {
  readonly commands: Command[]

  constructor(commands: Command[]) {
    this.commands = commands
  }

  render(template: string) {
    return Mustache.render(template.trim(), {commands: this.commands})
  }

  static parse(program: Commander): CommandDocument {
    const commands = program.commands.map((c: Commander) => {
      const name: string = c._name
      const description = c._description
      const args: Argument[] = c._args.map(arg => new Argument(arg))
      const options: Option[] = c.options
      return new Command({name, description, args, options})
    })
    return new CommandDocument(commands)
  }
}

