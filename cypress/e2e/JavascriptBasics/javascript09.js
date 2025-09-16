//conditional statements
let a = 20;
let b = 10;

if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

//switch case
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

//ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);

//Nested if
let num = 15;
if (num > 0) {
  if (num % 2 === 0) {
    console.log("The number is positive and even.");
  } else {
    console.log("The number is positive and odd.");
  }
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//Nested switch
let fruit = "Apple";
let color = "Red";

switch (fruit) {
  case "Apple":
    switch (color) {
      case "Red":
        console.log("It's a Red Apple.");
        break;
      case "Green":
        console.log("It's a Green Apple.");
        break;
      default:
        console.log("Unknown color for Apple.");
    }
    break;
  case "Banana":
    switch (color) {
      case "Yellow":
        console.log("It's a Yellow Banana.");
        break;
      case "Green":
        console.log("It's a Green Banana.");
        break;
      default:
        console.log("Unknown color for Banana.");
    }
    break;
  default:
    console.log("Unknown fruit.");
}           