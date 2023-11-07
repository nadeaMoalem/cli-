"use strict";
// armstrong.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armstrong = void 0;
class Armstrong {
    constructor(numberStr) {
        this.numberStr = numberStr;
    }
    calculateArmstrongValue() {
        const digits = this.numberStr.split('').map(Number);
        const numDigits = digits.length;
        const armstrongValue = digits.reduce((total, digit) => total + Math.pow(digit, numDigits), 0);
        return armstrongValue;
    }
    isArmstrongNumber() {
        const number = parseInt(this.numberStr, 10);
        if (isNaN(number)) {
            return false;
        }
        const armstrongValue = this.calculateArmstrongValue();
        return armstrongValue === number;
    }
}
exports.Armstrong = Armstrong;
