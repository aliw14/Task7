const arr1 = [5, 10, 20, 100, 45];
const [firstNum, secondNum] = arr1;
const sum = firstNum + secondNum;

const obj1 = {
  name: "Ali",
  surname: "Hilal",
  age: 19,
};
const { name, surname, ...rest } = obj1;

// If else with compare operations
if (firstNum > 0 && firstNum % 2 == 0) {
  console.log("true");
} else {
  console.log("false");
}

if (firstNum === secondNum || rest != secondNum) {
  console.log("true");
} else {
  console.log("false");
}

if ((arr1[3] < arr1[4] && firstNum >= 5) || arr1[1] == secondNum) {
  console.log("true");
} else {
  console.log("false");
}

if (sum > rest) {
  console.log("Array win");
} else {
  console.log("Object win");
}

// If else else if  with typeof
if (typeof obj1.name == "string") {
  console.log(obj1.name, "type is string");
} else if (typeof obj1.name == "number") {
  console.log(obj1.name, "type is number");
} else {
  console.log(obj1.name, "type is boolean");
}

//Ternary Operator
const userName = "Xasi";
console.log(userName === obj1.name ? "True Name" : "False Name");
