import {Option} from "commander"
import {Argument} from "./Argument"

export class Command {
  readonly name: string
  readonly args: Argument[]
  readonly options: Option[]
  readonly description: string

  constructor(props: Readonly<Command>) {
    this.name = props.name
    this.description = props.description
    this.args = props.args
    this.options = props.options
  }
}
