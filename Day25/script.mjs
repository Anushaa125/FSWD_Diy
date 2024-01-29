import { add } from "./script2.mjs";
//global scope
let y = "global";
console.log("value of y in global scope:", y);

//block scope
function myFunc() {
  let y = "functional";
  console.log("value of y in functional scope:", y);
  if (true) {
    let y = "block";
    console.log("value of y in block scope:", y);
  }
}
myFunc();

//Lexical scope
function newFunc(){
console.log("value of y in lexical scope:",y)
}
newFunc();

let z=[1,2,3,4,5];
console.log(add(...z));
