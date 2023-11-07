export class Palindrome{
    private input: string

    constructor(input:string){
        this.input = input
    }
    isPalindrome():boolean{
        const cleanInput = this.input.replace(/\s/g, '').toLowerCase();
        const reversedInput = cleanInput.split('').reverse().join('');
    
        return cleanInput === reversedInput;
    }
}