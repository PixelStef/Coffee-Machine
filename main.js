const input = require('sync-input');

let machineWater = 400;
let machineMilk = 540;
let machineBeans = 120;
let machineCups = 9;
let money = 550;

function espCalc() {
    if (
        machineWater >= 250 &&
        machineBeans >= 16 &&
        machineCups >= 1
    ) {
        machineWater -= 250;
        machineBeans -= 16;
        machineCups -= 1;
        money += 4;
        console.log("I have enough resources, making you a coffee!");
    } else {
        console.log("Sorry, not enough resources to make coffee.");
    }
}

function latCalc() {
    if (
        machineWater >= 350 &&
        machineMilk >= 75 &&
        machineBeans >= 20 &&
        machineCups >= 1
    ) {
        machineWater -= 350;
        machineMilk -= 75;
        machineBeans -= 20;
        machineCups -= 1;
        money += 7;
        console.log("I have enough resources, making you a coffee!");
    } else {
        console.log("Sorry, not enough resources to make coffee.");
    }
}

function capCalc() {
    if (
        machineWater >= 200 &&
        machineMilk >= 100 &&
        machineBeans >= 12 &&
        machineCups >= 1
    ) {
        machineWater -= 200;
        machineMilk -= 100;
        machineBeans -= 12;
        machineCups -= 1;
        money += 6;
        console.log("I have enough resources, making you a coffee!");
    } else {
        console.log("Sorry, not enough resources to make coffee.");
    }
}


function displayMachineState() {
    console.log(`The coffee machine has:
${machineWater} ml of water
${machineMilk} ml of milk
${machineBeans} g of coffee beans
${machineCups} disposable cups
$${money} of money`);
}

function fillMachine() {
    machineWater += parseInt(input("Write how many ml of water you want to add:"));
    machineMilk += parseInt(input("Write how many ml of milk you want to add:"));
    machineBeans += parseInt(input("Write how many grams of coffee beans you want to add:"));
    machineCups += parseInt(input("Write how many disposable cups you want to add:"));
}

function takeMoney() {
    console.log(`I gave you $${money}`);
    money = 0;
}

function repeatUser() {
    userAction = userAction = input("Write action (buy, fill, take, remaining, exit):");
}

console.log(`Welcome to the team! We're thrilled to have you on your first day at our coffee shop. 
Get ready for a brew-tiful journey filled with great coffee and even better company!`)

let userAction = input("Write action (buy, fill, take, remaining, exit):");
while (userAction !== "exit"){
switch (userAction) {
    case "buy":
        const userOptions = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
        switch (userOptions) {
            case "1":
                espCalc();
                repeatUser();
                break;
            case "2":
                latCalc();
                repeatUser();
                break;
            case "3":
                capCalc();
                repeatUser();
                break;

            case "back":
                repeatUser();
                break;
        }
        break;

    case "fill":
        fillMachine();
        repeatUser();
        break;

    case "take":
        takeMoney();
        repeatUser();
        break;

    case "remaining":
        displayMachineState();
        repeatUser();
        break;
}
}