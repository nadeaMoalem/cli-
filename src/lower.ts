export class Lower{
    private input: string

    constructor(input:string){
        this.input = input
    }
    isLower():boolean{
        return this.input.split("").reduce((acc, char) => {
            return acc && char === char.toLowerCase()
        }, true)
    }
}
