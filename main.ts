// Start code by import inquirer

import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type: "string",
        name: "cardholdername",
        message: " Welcome Maryam Yousuf"
    },

    {
        type: "number",
        name: "pinCode",
        message: "Enter your 4 digit pinCode"
    },

    // creating listing and withdrawl method
    {
        type: "list",
        name: "accountType",
        message: " Select your account type",
        choices: ["Current", "Saving"]
    },

    // Transition type
    {
        type: "list",
        name: "transitionType",
        message: "Select your transitin type",
        choices: ["Cash", "Withdrawl"]
    },

    // select amount
    {
        type: "list",
        name: "amount",
        message: " Select your amount",
        choices: [1000,2000,5000,10000],
        when(user){
            return user.transitionType === "Cash"
        }
    },

    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(user){
            return user.transitionType === "Withdrawl"
        }
    }
])

// Final Slip

if (user.pinCode){
    const balance =Math.floor(Math.random()* 10000+1)
    console.log(balance)
    const enteramount = user.account;

    if (enteramount <= balance) {
        const remaining = balance-enteramount
        console.log(`you have remaining balance is ${enteramount} and you have remaining balance is ${remaining}`)
    }  

  }