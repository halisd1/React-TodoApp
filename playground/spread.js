// function add(a, b){
//   return a+b;
// }
//
// console.log(add(5,6));
//
// var toADD = [9, 5];
// //normally we can do add(toAdd[0], toAdd[1])
//
// console.log(add(...toADD));


// var groupA = ['George', 'Jerry'];
// var groupB = ['Vikram', 'Dude'];
// var finalArray = [3, ...groupA];

var person = ['George', 23];
var person2 = ['Jerry', 39];

function age(name, age){
  console.log('Hello! ' + name + '. You are ' + age + ' years old!');
};

age(...person);
age(...person2);

var names = ['Mike', 'Ben'];
var final = ['Harris'];

final = [...final, ...names];

console.log(final)
