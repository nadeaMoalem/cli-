"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require("node:process");
const armstrong_1 = require("../src/armstrong");
const digits_1 = require("../src/digits");
const lower_1 = require("../src/lower");
const nationalize_1 = require("../src/nationalize");
const palindrome_1 = require("../src/palindrome");
function repl() {
    return __awaiter(this, void 0, void 0, function* () {
        const rl = readline.createInterface({
            input,
            output,
        });
        while (true) {
            const input = yield rl.question("> ");
            const inputArr = input.split(" ");
            if (inputArr[0] === "exit") {
                rl.close();
                break;
            }
            if (inputArr.length !== 2) {
                console.log("invalid input");
            }
            else {
                const command = inputArr[0];
                const arg = inputArr[1];
                switch (command) {
                    case "palindrome":
                        const palindrome = new palindrome_1.Palindrome(arg);
                        if (palindrome.isPalindrome()) {
                            console.log("true");
                        }
                        else {
                            console.log("false");
                        }
                        break;
                    case "armstrong":
                        const armstrong = new armstrong_1.Armstrong(arg);
                        if (armstrong.isArmstrongNumber()) {
                            console.log("true");
                        }
                        else {
                            console.log("false");
                        }
                        break;
                    case "digit":
                        const digit = new digits_1.Digits(arg);
                        if (digit.isDigit()) {
                            console.log("true");
                        }
                        else {
                            console.log("false");
                        }
                        break;
                    case "lower":
                        const lower = new lower_1.Lower(arg);
                        if (lower.isLower()) {
                            console.log("true");
                        }
                        else {
                            console.log("false");
                        }
                        break;
                    case "nationalize":
                        const nationalize = new nationalize_1.Nationalize(arg);
                        console.log(yield nationalize.getNationality());
                        break;
                }
            }
        }
    });
}
repl();
