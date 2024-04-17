#!/usr/bin/env node
import inquirer from "inquirer";
console.log("\nWellcome To our CLI-Simple Calculator\n")
const answer = await inquirer.prompt([
  { message: "Enter The First Number : ",
    type: "number",
    name: "firstNumber",
  },
  { message: "Enter The Second Number : ",
    type: "number",
    name: "secondNumber",
  },
  { message: "Select one of operator to perform an Operation.",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multipilcation", "Division","Modules"],
  },
]);
       // conditional statment
if (answer.operator === "Addition") {
  console.log(`\nThe Additio Of Your Given Numbers Is= ${answer.firstNumber + answer.secondNumber}`);
} else if (answer.operator === "Subtraction") {
  console.log(`\nThe Subtraction Of Your Given Numbers Is = ${ answer.firstNumber - answer.secondNumber}`);
} else if (answer.operator === "Multipilcation") {
  console.log(`\nThe Multipilcation Of Your Given Numbers Is = ${answer.firstNumber * answer.secondNumber}`);
} else if (answer.operator === "Division") {
  console.log(`\nThe Division Of Your Given Numbers Is = ${answer.firstNumber / answer.secondNumber}`);
}  else if (answer.operator === "Modules") {
  console.log(`\nThe Modules Of Your Given Numbers Is = ${answer.firstNumber % answer.secondNumber}`);
}else {
  console.log("\nPleacs Select Valid Input");
}
console.log('\nThank You For Using CLI-Simple Calculator');

