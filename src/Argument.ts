export default class Argument {
  readonly name: string
  readonly required: boolean
  readonly variadic: boolean

  constructor(props: Readonly<Argument>) {
    this.name = props.name
    this.required = props.required
    this.variadic = props.variadic
  }
}
