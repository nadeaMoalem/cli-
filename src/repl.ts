const readline = require('node:readline/promises')
const { stdin: input, stdout: output } = require("node:process")

import { Armstrong } from "./armstrong"
import { Digits } from "./digits"
import { Lower } from "./lower"
import { Nationalize } from "./nationalize"
import { Palindrome } from "./palindrome"


async function repl(){
    const rl = readline.createInterface({
        input,
        output,
    })

    while (true) {
        const input = await rl.question("> ")
        const inputArr = input.split(" ")


        if (inputArr[0] === "exit") {
            rl.close()
            break
        }
        if (inputArr.length !== 2){
            console.log("invalid input"); 
        }else {
            const command = inputArr[0]
            const arg = inputArr[1]

            switch (command) {
                case "palindrome":
                    const palindrome = new Palindrome(arg)
                    if (palindrome.isPalindrome()){
                        console.log("true")
                    }else {console.log("false")}
                    break
                case "armstrong":
                    const armstrong = new Armstrong(arg)
                    if (armstrong.isArmstrongNumber()){
                        console.log("true")
                    }else {console.log("false");
                    }
                    break
                case "digit":
                    const digit = new Digits(arg)
                    if (digit.isDigit()){
                        console.log("true")
                    }else {console.log("false");
                    }
                    break
                case "lower":
                    const lower = new Lower(arg)
                    if (lower.isLower()){
                        console.log("true")
                    }else {console.log("false")}
                    break
                case "nationalize":
                    const nationalize = new Nationalize(arg)
                    console.log(await nationalize.getNationality())
                    break
            }
        }
    }
}

repl()

