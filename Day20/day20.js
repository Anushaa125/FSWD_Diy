const newString = "Let's slice this string";
const sliceString = newString.slice(6,11);
console.log(sliceString);

let text = 'Today is a dummy day.';
const newText = text.replace('dummy','great');
console.log(newText);

let capitalText = newText.toUpperCase();
console.log(capitalText);

let concatText = newText.concat('Welcome to veranda');
console.log(concatText);

let newText2 = "          Lorem ipsum dolor, sit amet consectetur Repundiandae, et nesciunt!        ";
let trimText = newText2.trim();
console.log(trimText);
