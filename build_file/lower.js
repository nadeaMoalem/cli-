"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lower = void 0;
class Lower {
    constructor(input) {
        this.input = input;
    }
    isLower() {
        return this.input.split("").reduce((acc, char) => {
            return acc && char === char.toLowerCase();
        }, true);
    }
}
exports.Lower = Lower;
