import Argument from "./Argument"
import {Option} from "commander"

export default class Command {
  readonly name: string
  readonly args: Argument[]
  readonly options: Option[]
  readonly description: string

  constructor(props) {
    this.name = props.name
    this.description = props.description
    this.args = props.args
    this.options = props.options
  }
}
