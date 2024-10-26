import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    AED: 3.67,
    HKD: 7.83,
    PHP: 57.57,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "AED", "HKD", "PHP"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "AED", "HKD", "PHP"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let basAmount = amount / fromAmount;
let convertorAmount = basAmount * toAmount;
console.log(convertorAmount);
