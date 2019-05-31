export class Argument {
  readonly name: string
  readonly required: boolean
  readonly variadic: boolean

  constructor(props: Readonly<Argument>) {
    this.name = props.name
    this.required = props.required
    this.variadic = props.variadic
  }

  get display(): string {
    if (this.required) {
      return `<${this.name}>`
    }

    if (this.variadic) {
      return `[${this.name}...]`
    }

    return `[${this.name}]`
  }
}
