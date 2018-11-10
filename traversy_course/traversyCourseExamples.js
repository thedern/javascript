/* ==========================================================================
   Variables
   ========================================================================== */

// Rules - letters, number, underscore, $ (cannot start with a number)
// var is older syntax, replaced by let and const

// var name = 'john';
// console.log(name);

// // var and let allow for variable reassignment
// var name = 'steve';
// console.log('name');

// // init variables
// var greeting;

// greeting = 'hello';
// console.log(greeting);


// let is near identical to var except has block-level scope advantages
// let name = 'john';
// console.log(name);

// // const, cannot be reassigned
// const fname = 'dave';
// //const name = 'sara'; //error
// //const greeting;  //error, cannot init and assign later

// //assign object
// const person = { 
//     name: 'bill',
//     age: 20
// };

// console.log(person);

// //with const, we can reassign the data in the object or array, but cannot reassign 'person'
// person.name = 'biff';
// person.age = 32;
// console.log(person);


// RECOMMENDATION:  Use const unless you plan on changing the variable or plan on using init.


/* ==========================================================================
   DATA TYPES
   ========================================================================== */

// ** Primitive data stored in variable vs Reference data stored in memory **

// Primitives:  String, Number (includes floats), Boolean, Null, Undefined, Symbols (ES6)
// Reference:  Arrays, Objects, Functions, Dates, All other not listed

// const name = 'darren';
// console.log(typeof(name));

// const age = 44;
// console.log(typeof(age));

// const haskids = true;
// console.log(typeof(haskids));

// const car = null;
// console.log(typeof(car)); // returns as object which is a known bug

// let test;
// console.log(typeof(test)); // undefined since init and not assigned

// const sym = Symbol();
// console.log(typeof(sym));

// // ** Reference types ** //

// const nums = [ 1, 2, 2, 3];
// console.log(typeof(nums));

// const me = { 
//     name: 'darren',
//     age: 44
// }
// console.log(typeof(me));

// const today = new Date();
// console.log(today);
// console.log(typeof(today));

/* ==========================================================================
   TYPE CONVERSION
   ========================================================================== */

// take variable can change data type

// init
// let val;

// // *String function *//
// // number to string 
// val = String(12);
// val = String(4 + 4);

// // boolean to string
// val = String(true);

// // date to string
// val = String(new Date());

// // array to string
// val = String([1,3,5,7])

// // *toString() method *//
// val = (5).toString();
// val = (true).toString();

// console.log(val);
// console.log(typeof(val));
// console.log(val.length);  // length is string method


// //* strings to numbers *//

// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello'); // produces NaN

// val = parseInt('100');
// val = parseFloat('100.45');

// console.log(val);
// console.log(typeof(val));
// console.log(val.toFixed(2));


// /* ==========================================================================
//    Type Coercion
//    ========================================================================== */
// // javascript reassigns type dynamically based on useage, see below

// const val1 = '5';
// const val2 = 6;
// const sum = val1 + val2;
// console.log(typeof(sum));
// console.log(sum); // creates string

/* ==========================================================================
   MATH and MATH OBJECT
   ========================================================================== */

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple Math

// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// console.log(val);

// // math object

// val = Math.PI;
// val = Math.round(2.8);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-2);
// val = Math.pow(8, 2);
// val = Math.min(2, 22, 4, 5, 88);
// val = Math.max(2, 22, 4, 5, 88);

// val = Math.random(); // decimal
// val = Math.random() * 20; // randowm between 0 - 19
// val = Math.random() * 20 + 1; // random between 1 - 20
// val = Math.floor(Math.random() * 20 + 1); // random between 1 and 20, no decimals

// console.log(val);

/* ==========================================================================
   STRINGS FUNCTIONS AND METHODS
   ========================================================================== */

// const firstName = 'darren';
// const lastName = 'smith';
// const age = 44;
// const str = 'Hello there my friend';

// let val;

// val = firstName + lastName;

// // concatenation
// val = firstName + ' ' + lastName

// // append
// val = 'colin ';
// val += 'smith';
// val = 'hello my name is ' + firstName + ' and I am ' + age + ' years old.';

// // escaping
// val = 'That\'s awesome, I can\'t wait!';

// // length property
// val = firstName.length;

// /**
//  * string methods ()
//  */

// // concat method
// val = firstName.concat(' ', lastName);

// // case methods
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// // get index values of characters in name
// val = firstName[0];  // should log first character of first name

// // get index of character
// val = firstName.indexOf('r');  //index of first 'r'

// // get index of character 
// val = firstName.lastIndexOf('r'); // index of second 'r'

// // get character at index provided
// val = firstName.charAt(1);

// // get last character of string, works if string changes value
// val = firstName.charAt(firstName.length -1);

// // get substrings (exclusive of ending index value entered)
// val = firstName.substring(0,3);

// // slice
// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// // create an array from string
// val = str.split(' ');

// // replace
// val = str.replace('friend', 'enemy');

// // includes
// val = str.includes('Hello');

// console.log(val);
// console.log(typeof(val));

/* ==========================================================================
   Template Literals
   ========================================================================== */

// New in feature in ES6, very handy to write html

// const name = 'john';
// const age = 30;
// const job = 'web developer';
// const city = 'Richmond';

// // without template strings, very cumbersome to type out due to quotes and concatenation.

// let html;

// html = '<ul>' +
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Jon: ' + job + '</li>' +
//         '<li>City: ' + city + '</li>' +
//         '</ul>';

// // with template literals, just type as you would for normal html
// // place markup inside of backticks
// // can add markup, expressions, functions, terinary operator (if/else)

// function hello (){
//     return 'hello';
// }

// html = `
//  <ul>
//     <li>Name: ${name} </li>
//     <li>Age:  ${age}  </li>
//     <li>Job:  ${job}  </li>
//     <li>City: ${city} </li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}

//  </ul>
// `;
       
// console.log(html);
// console.log(typeof(html));

// // write html to page
// document.body.innerHTML = html;

/* ==========================================================================
   Arrays and Array Methods
   ========================================================================== */
// can contain any primitive data type as well as objects and Dates
// can contain a mix of data types in same array

// create an array
// const numbers = [43, 76, 89, 7, 2, 100];
// const fruit = ['apples', 'oranges', 'pears', 'blueberries'];
// // create using constructor
// const numbers2 = new Array(889, 3, 45, 8.91, 1200);


// let val;

// // get length
// val = numbers.length;

// // verify if is an array
// val = Array.isArray(numbers);

// // Get a single value using index
// val = numbers[4];

// // modify, insert
// numbers[2] = 1001;

// // index of value
// val = numbers.indexOf(100);

/**
 * MUTATE ARRAY
 */

// add on to array (append)
// numbers.push(250);

// // add on to array (prepend)
// numbers.unshift(340);

// // take off from end
// numbers.pop();

// // take off from the front
// numbers.shift();

// // splice, where we want to start and where we want to end
// numbers.splice(1,3);

// // reverse
// numbers.reverse();

// // concatenate arrays
// val = numbers.concat(numbers2);

// sort
// val = fruit.sort();

// // sorts by first number unless compare function used
// val = numbers.sort();

// // compare function for proper number sort
// val = numbers.sort(function(x, y){
//     return x - y;
// });

// find first number under 50
// function finder(num){ 
//     return num < 50;
// }

// val = numbers.find(finder);

// console.log(numbers);
// console.log(val);



/* ==========================================================================
   Object Literals
   ========================================================================== */

// const person = { 
//     firstName : 'Steve',
//     lastName : 'Smith',
//     birthyear: 1990,
//     hobbies : ['music', 'sports'],
//     email: 'steve@aol.com',
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     age: function(year) {
//         return  year - this.birthyear;
//     }
// };

// let val;

// val = person;

// // get specific value
// val = person.firstName;
// // alternate way of getting value
// val = person['firstName'];

// // get age using age function in object
// val = person.age(2018);

// // get hobby
// val = person.hobbies[1];

// // get state
// val = person.address.state;

// // get age in 2002
// val = person.age(2002);

// // get age in 2040
// val = person.age(2040);

// console.log(val);


// // loop through an array of people objects
// const people = [ { name: 'john', age: 20},{name: 'mike', age: 50}];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name);
// }


/* ==========================================================================
   Date and Times
   ========================================================================== */

// Date is an object

// let val;

// // create date object (used in examples below)
// const today = new Date();

// let birthday;
// birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

// // months are zero based so current month needs to be +1
// val = today.getMonth() +1;
// val = today.getDate();
// // days are zero based so returns the index value of the day 'Sunday = 0'
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// // get timestamp 
// val = today.getTime();

// // set dates
// // months are zero based
// birthday.setMonth(2);
// // sets calendar date (12 = 12th)
// birthday.setDate(12);
// birthday.setFullYear(1974);
// birthday.setHours(15);
// birthday.setMinutes(30);

// console.log(val);
// console.log(typeof(val));
// console.log(birthday);


/* ==========================================================================
   Conditionals and Comparisons
   ========================================================================== */

// if --> then --> else
// the double equal '==' only test value
// the tripple equal '===' tests value AND type
// always use '==='; '!=='

// let id;

// id = '100'; // string
// id = 100;   // number

// // comparison equal to
// if (id === 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // not equal to
// if (id !== 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // uses with template strings to format html
// // test if defined
// if(typeof(id) !== 'undefined') {
//     console.log(`the id is ${id}`);
// } else {
//     console.log('no id');
// }

// // greater or less than
// if (id >= 200) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // if-else
// const color = 'purple';
// if (color === 'yellow') {
//     console.log('color is yellow');

// } else if (color === 'blue') {
//     console.log('color is blue');
    
// } else {
//     console.log('I am colorblind');
// }

// // logical operators AND && ; OR || ; NOT !
// const name = 'Steve';
// const age = 20;

// // AND
// if (age > 0 && age < 12) {
//     console.log(`${name} is a child`);
// } else if (age >= 13 && age < 19) {
//     console(`${name} is a teen`);
// } else {
//     console.log(`${name} is an adult`);
// }

// // NOT
// if (age != 100) {
//     console.log(`${name} is most likely alive`);
// }

// // OR
// if (age > 0 || name === 'Steve') {
//     console.log(`this may be describing ${name}`);
// }

// /**
//  * TERNARY OPERATOR 
//  */

// // shorthand for conditional if/else
// // ? ==> if ;  : ==> else

// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');


/* ==========================================================================
   Switch Statement (more conditionals)
   ========================================================================== */
// best used for a situation when you have a lot of conditional statements, more efficient

// const color = 'red';
 
// switch(color) {
// case 'red' :
//     console.log('color is red');
//     break;
// case 'blue' :
//     console.log('color is blue');
//     break;
// default:
//     console.log('color is not red or blue');
//     break;
// }


/* ==========================================================================
   Function Declarations and Expressions
   ========================================================================== */

// function contains default value of 'John'
// function greet(firstName = 'John'){
//     return 'Hello ' + firstName;
// }

// // call function with passing argument
// console.log(greet('Steve'));

// // call function without passing argument will use defined default, 'John'
// console.log(greet());

// // function expression
// const square = function(x = 3){
//     return x*x;
// };

// console.log(square(8));
// // using the default
// console.log(square());

// // imediately invokable function expression (IIFE); gets declared and executed at same time
// // is a privat function
// (function(name){
//     console.log(`hello ${name}`);
// })('darren'); // parenthesis at en required

// // function in objects (property methods)
// // see object lecture notes, age calculator
// const todo = {
//     add: function() {
//         console.log('Add todo ..'),
//     }
// };

// todo.add();


/* ==========================================================================
   Loops
   ========================================================================== */

// ** for loop **

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // skip logging '2' and do something else 'continue'
// for(let i = 0; i < 10; i++) {
//     if (i === 2) {
//         console.log('2 is my favorite number');
//         // go to next iteration
//         continue;
//     }
//     console.log(i);
// }

// // 'break' out of loop when i is 5
// for(let i = 0; i < 10; i++) {
//     if(i === 5) {
//         break;
//     }
//     console.log(i);
// }

// ** while loop **

// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

// // ** do while loop **
// // will always run at least once

// let z = 0;
// do {
//     console.log(z);
//     z++;
// }
// // while follows 'do'
// while(z < 20);
// // end do/while

// // loop through an array
// // Note: arrays have specific loop patterns but this is how you loop with a 'for' loop
// const cars = ['ford', 'chevy', 'honda', 'toyota'];
// for (let j = 0; j < cars.length; j++) {
//     console.log(j, cars[j]);
// }

// // ** for each ** 
// // this loop on array is cleaner than for loop
// cars.forEach(function(car){
//     console.log(car);
// });

// // return each car followed by its index
// cars.forEach(function(car, index){
//     console.log(car, index);
// });

// // ** map **
// // create an array of user objects
// const users = [
//     {id:12, name: 'john'},
//     {id:22, name: 'bill'},
//     {id:32, name: 'joe'},
//     {id:43, name: 'steve'}
// ];

// // create constant ids and iterate through array capturing ids
// const ids = users.map(function(user){
//     return user.id;
// });

// // log contents of ids which is an array of just the ids
// console.log(ids);

//** for in loop **

// const person = {
//     firstName: 'darren',
//     lastName: 'smith',
//     age: 44
// };

// // get keys
// for (let x in person) {
//     console.log(x);
// }

// // get values
// for (let x in person) {
//     console.log(person[x]);
// }

// // get key value pairs
// for (let x in person) {
//     console.log(`${x} : ${person[x]}`);
// }


/* ==========================================================================
   Window Object
   ========================================================================== */
// Global object in client-side javascript.  DOM is part of Window Object

// methods // objects // properties

// Alert
// window.alert('hello');

// Prompt
// let input = prompt();
// alert(input);

// Confirm
// if(confirm('are you sure?')){
//     console.log('YES');
// } else {
//     console.log('NO');
// }

// height and window width
// let val;

// val = window.outerHeight;
// val = window.outerWidth;
// val = window.innerHeight;
// val = window.innerWidth;


// // scroll points
// val = window.scrollY
// val = window.scrollX; // need scrollbars to get values other than zero

// // locatoin object

// val = window.location; // host's tcp information among other data
// val = window.location.hostname;
// val = window.location.href;
// val = window.location.search;

// // redirect
// window.location.href = 'http://google.com';
// // window.location.reload();

// // History object
// // window.history.go(-2);

// // Navigator object (browser object)

// // shows browser information ( user-agent, etc)
// val = window.navigator;

// console.log(val);



/* ==========================================================================
   Variable Scope
   ========================================================================== */

// global scope
// var a = 1;
// let b = 2;
// const c = 3;

// console.log('global scope: ', a, b, c);

// // function scope can see its own scope AND the global scope.
// // elements in the global scope CANNOT see inside the function scope
// // this is referred to as lexical scope

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('function scope: ', a, b, c);
// }

// function test2() {
//     var e = 4;
//     let f = 5;
//     const g = 6;
//     // can log its own scope and the global scope
//     console.log('function2 scope: ', a, b, c, e, f, g);
// }

// test();
// test2();

// // block-level scope

// if (true) {
//     // block scope
//     // var in the block scope overwrites the same variable in the global scope.  This can cause issues.  That is why 'let' is better
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('block scope: ', a, b, c);

// }

// console.log('global scope with block-level scope overwrite for \'a\': ', a, b, c);

// // loop example of block level scope
// for(let a = 0; a < 10; a++) {
//     console.log(`Loop: ${a}`);
// }

// // if I used 'var' instead of 'let', global 'a' would have changed.
// console.log(`global scope 'a' is still ${a}`);


