export class Digits{
  private input:string

  constructor(input:string){
      this.input = input
  }

  isDigit():boolean{
      return /^[0-9]*$/.test(this.input)
  }
}

