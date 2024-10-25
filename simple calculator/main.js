#! usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "subraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please Enter valid operator");
}
