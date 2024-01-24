var str1 = 'Hello';
var num1 = 25;
var bool1 = true;
var und = undefined;
var n = null;
var big1 = 2345678n;
var sym = Symbol(100);

console.log('number string bigInt undefined object symbol');

console.log(num1, str1, big1, bool1, und, n, sym);

var array = [1, 2, 3, 4, 5];
var obj = {
    name:'Edureka',
    age:24,
    email:'edureka@gmail.com'
}

var date = new Date();
console.log('object object object function');
console.log(array, obj, date);
console.log(date);
