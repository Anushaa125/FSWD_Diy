const personName = 'Girish';
const age = 25;

//Local storage
localStorage.setItem('name',personName);
localStorage.setItem('age',age);

localStorage.removeItem('age');

let name = localStorage.getItem('name');
console.log(name);

//session storage
sessionStorage.setItem('name',personName);
sessionStorage.setItem('age',age);

//sessionStorage.clear();

let arr = ['Rahul', 'Ravi', 'Santhosh', 'Surya', 'Kiran'];
localStorage.setItem('employees', JSON.stringify(arr));

const newArr = localStorage.getItem('employees');
console.log(newArr);
console.log(JSON.parse(newArr));
