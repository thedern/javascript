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

   


