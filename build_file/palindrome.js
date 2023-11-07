"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Palindrome = void 0;
class Palindrome {
    constructor(input) {
        this.input = input;
    }
    isPalindrome() {
        const cleanInput = this.input.replace(/\s/g, '').toLowerCase();
        const reversedInput = cleanInput.split('').reverse().join('');
        return cleanInput === reversedInput;
    }
}
exports.Palindrome = Palindrome;
