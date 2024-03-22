#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: "Enter your First Number : ",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter yuor Second Number : ",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select one of operator to perform Operation('-')",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multipilcation", "Division"],
  },
]);
// console.log(answer);
// conditional statment
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multipilcation") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Pleacs Select Valid Number");
}
