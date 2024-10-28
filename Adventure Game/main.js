import inquirer from "inquirer";
class player {
    name;
    feul = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.feul - 25;
        this.feul = fuel;
    }
    fuelIncrease() {
        this.feul = 100;
    }
}
class opponent {
    name;
    feul = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.feul - 25;
        this.feul = fuel;
    }
}
let players = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name",
    }
]);
let opponents = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your Opponent",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
let p1 = new player(players.name);
let O1 = new opponent(opponents.select);
do {
    //skeleton
    if (opponents.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what whould you like to do?",
                choices: ["Attack", "Drind Portion", "Run for your life....."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.feul}`);
                console.log(`${O1.name} fuel is ${O1.feul}`);
                if (p1.feul <= 0) {
                    console.log(`you loose, better Luck Next Time`);
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.feul}`);
                console.log(`${O1.name} fuel is ${O1.feul}`);
                if (O1.feul <= 0) {
                    console.log(`You Win`);
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drind Portion") {
            p1.fuelIncrease();
            console.log(`you drink Health portion your fuel is ${p1.feul}`);
        }
        if (ask.opt == "Run for your life.....") {
            console.log(`you loose, better Luck Next Time`);
            process.exit();
        }
    }
    //Alien
    if (opponents.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what whould you like to do?",
                choices: ["Attack", "Drind Portion", "Run for your life....."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.feul}`);
                console.log(`${O1.name} fuel is ${O1.feul}`);
                if (p1.feul <= 0) {
                    console.log(`you loose, better Luck Next Time`);
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.feul}`);
                console.log(`${O1.name} fuel is ${O1.feul}`);
                if (O1.feul <= 0) {
                    console.log(`You Win`);
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drind Portion") {
            p1.fuelIncrease();
            console.log(`you drink Health portion your fuel is ${p1.feul}`);
        }
        if (ask.opt == "Run for your life.....") {
            console.log(`you loose, better Luck Next Time`);
            process.exit();
        }
    }
    //zombie
    if (opponents.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what whould you like to do?",
                choices: ["Attack", "Drind Portion", "Run for your life....."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.feul}`);
                console.log(`${O1.name} fuel is ${O1.feul}`);
                if (p1.feul <= 0) {
                    console.log(`you loose, better Luck Next Time`);
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.feul}`);
                console.log(`${O1.name} fuel is ${O1.feul}`);
                if (O1.feul <= 0) {
                    console.log(`You Win`);
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drind Portion") {
            p1.fuelIncrease();
            console.log(`you drink Health portion your fuel is ${p1.feul}`);
        }
        if (ask.opt == "Run for your life.....") {
            console.log(`you loose, better Luck Next Time`);
            process.exit();
        }
    }
} while (true);
