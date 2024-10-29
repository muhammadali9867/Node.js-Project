import inquirer from "inquirer";
const Quiz = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        message: "Q1: what is the correct way to check if two value are not equal in typescript",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "q2",
        type: "list",
        message: "Q2: which of the following characters is commonly allowed in variable named in typescript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "q3",
        type: "list",
        message: "Q3 : which operator is commonly used for string concetenation in typescript ",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "q4",
        type: "list",
        message: "Q4: In typescript which symbol is commonly  used to terminate a statement?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "q5",
        type: "list",
        message: "Q5: which method of inquirer,js is used to start the prompt interface and recieve user input? ",
        choices: ["start()", "prompt()", "init()", "run()"]
    },
]);
let score = 0;
switch (Quiz.q1) {
    case "a !== b":
        console.log("1.correct");
        ++score;
        break;
    default:
        console.log("1. incorrect");
}
switch (Quiz.q2) {
    case "$":
        console.log("2.correct");
        ++score;
        break;
    default:
        console.log("2. incorrect");
}
switch (Quiz.q3) {
    case "+":
        console.log("3.correct");
        ++score;
        break;
    default:
        console.log("3. incorrect");
}
switch (Quiz.q4) {
    case ";":
        console.log("4.correct");
        ++score;
        break;
    default:
        console.log("4. incorrect");
}
switch (Quiz.q5) {
    case "prompt()":
        console.log("5.correct");
        ++score;
        break;
    default:
        console.log("5. incorrect");
}
console.log(`score ${score}`);
