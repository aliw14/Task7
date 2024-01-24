const arr1 = [5, 10, 20, 100, 45];
const [firstNum, secondNum] = arr1;
const sum = firstNum + secondNum;

const obj1 = {
  name: "Ali",
  surname: "Hilal",
  age: 19,
};
const { age } = obj1;

if (sum > age) {
  console.log("Array win");
} else {
  console.log("Object win");
}
