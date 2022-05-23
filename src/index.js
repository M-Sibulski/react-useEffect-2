import { React } from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//var numbers = [3, 56, 2, 48, 5];

/* function double(num) {
  return num * 2;
}

//MAP FUNCTION
const newNumbers1 = numbers.map(double);
console.log(newNumbers1);

const newNumbers2 = [];
numbers.forEach((e) => {
  newNumbers2.push(double(e));
});
console.log(newNumbers2);

const newNumbers3 = numbers.map((e) => {
  return e * 2;
});
console.log(newNumbers3); */

//FILTER FUNCTION
/* const newNumbers4 = numbers.filter((e) => {
  return e >= 3;
});
console.log(newNumbers4);

const newNumbers5 = [];
numbers.forEach((e) => {
  if(e >= 3) {
    newNumbers5.push(e);
  }
})
console.log(newNumbers5); */

//REDUCE FUNCTION
/* var totalNumber1 = numbers.reduce((e0, e1) => {
  return e0 + e1;
});
console.log(totalNumber1);

var totalNumber2 = 0;
numbers.forEach((e) => {
  totalNumber2 += e;
});
console.log(totalNumber2); */

//FIND FUNCTION
/* const newNumber = numbers.find((e) => {
  return e > 10;
}) */
/* const newNumber = numbers.find((e) => e > 10);
console.log(newNumber); */

//FIND INDEX FUNCTION
/* const index = numbers.findIndex((e) => {
  return e > 10;
}) */
/* const index = numbers.findIndex((e) => e > 10);
console.log(index); */

root.render(<App />);
