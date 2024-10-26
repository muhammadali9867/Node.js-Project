#!/usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuesseNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
if (answers.userGuesseNumber === randomNumber) {
    console.log("congtratulation! you guessed right.");
}
else {
    console.log("you guessed wrong number");
}
