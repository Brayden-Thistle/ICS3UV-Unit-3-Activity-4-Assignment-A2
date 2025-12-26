/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-26
 * @fileoverview this program determines if somebody can join a contest based off their weight 
 */
//const
const weight = Number(prompt("How much do you weigh?"));

//if else statement
if (weight >= 77 && weight <= 105) {
  console.log("You may enter the contest.");
} else {
  console.log("You cannot enter the contest.");
}

console.log("\nDone.")