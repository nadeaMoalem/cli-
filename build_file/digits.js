"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Digits = void 0;
class Digits {
    constructor(input) {
        this.input = input;
    }
    isDigit() {
        return /^[0-9]*$/.test(this.input);
    }
}
exports.Digits = Digits;
