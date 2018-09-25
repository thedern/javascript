/*
var firstName = 'darren';
var lastName = 'smith';
var age = 44;
var fullAge = true;
var job;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(fullAge);
console.log(job);

job = 'nerd';
console.log(job);

*/

//-------------------------------------------------
/*
// Lecture:  variable mutation and type coersion

var firstName = 'darren';
var age = 44;

//type coercion, age int became age string
console.log(firstName + ' ' + age);

var job, isMarried;

job = 'teacher';
isMarried = 'false';

//even boolean 'isMarried' gets converted to a string
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried )

//variable mutation, was an int, now a string
age = 'forty four';

//instead of console log, create popup...
//Note, visual studio code will error stating 'alert not defined' but this does work in browser
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('what is last name?');
console.log(firstName + ' ' + lastName);

*/

//-----------------------------------------
/*
//Lecture:  operators

var year, yearJohn, yearJoe;
year = 2018;
yearJohn = year - 44;
yearJoe = year - 86;
console.log(yearJohn);
console.log(yearJoe);
console.log(year / 10);
console.log(year * 2);

// logical operators
test = yearJohn > yearJoe;
console.log(test);

//typeof operator
console.log(typeof yearJoe);
var x;
console.log(typeof x);
console.log(typeof test);
*/

//-------------------------------------
//Lecture:  Operator Precedence
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//should print 'true'
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//should print 32
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments to both x and y
var x, y;
x = y = (3 + 5) * 4 - 7; //PDMAS applied like in all math
console.log(x, y); 

//handy increment in javascript
x = 2;
x++; // same as typing x += 1
console.log(x);
x--; // same as typing x -= 1
console.log(x);
*/

//-----------------------------------------------------
//Control Structures
/*

var firstName = "darren";
var civilStatus = 'married';

if (civilStatus === 'married') {
    console.log(firstName + " is married");
} else {
    console.log(firstName + " is not married");
}

//boolean
var isMarried = false; // true is true, like with python
if (isMarried) {
    console.log(firstName + " is married");
} else {
    console.log(firstName + " is not married");
}

*/

//---------------------------------------------------------
// boolean logic

/*
var firstName = "john";
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager'); // boolean 'and' operation
} else {
    console.log(firstName + ' is a man');
}

*/

//--------------------------------------------------------------------------
//Terinary operator and switch statements
/*
var firstName = "john";
var age = 45;

//terniary operator has 3 parts and is shorthand for if/else
//parts are test condition, if --> '?', else --> ':'

age >= 18 ? console.log(firstName + " can drink a beer")
: console.log(firstName + " can drink a water");

// short hand for populating a variable based on a condition
var drink = age >= 18 ? 'beer' : 'water';

console.log(firstName + " can drink " + drink);

//USAGE:  use ternary operator for if/else for non-complex statements

//switch statement

var job = 'karate master';
switch (job) {
    //case 1 response is to both teacher and instructor
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches javascript');
        break;
    case 'driver':
        console.log(firstName + ' drives a truck');
        break;
    case 'karate master':
        console.log(firstName + ' kicks butts');
        break;
    default:
        console.log(firstName + ' is unemployed');

}
*/

//----------------------------------------------------------
// Truthy and Falsy statements; Equality

//falsy values are undefined, null, 0, ' ', NaN
//truthy values are all values NOT falsy
/*
var height;

height = 23; //truthy when 23 assigned, comment out and it becomes falsy

// height = 0; //is undefined by default unless dealt with in the code

// OR statement deals with 0 to make it truthy.  See rules above
if (height || height === 0) {
    console.log('Variable has been defined');
} else {
    console.log('Variable has not been defined');
}

// '===' vs '=='
if (height == '23') {
    console.log('The == operator does type coercion!!!');
    console.log('This means 23 == "23"');
    // ===  does strict comparison and is best practice. Example: 23 and 
    // '23' are NOT equal when using ===
} 

*/
//------------------------------------------------------------------

//Function Declaration
//D.R.Y. = DO NOT REPEAT YOURSELF ---> FUNCTIONS
/*
//basic function
function calculateAge(birthYear) {
    //returns age value to caller
    return 2018 - birthYear;
}

varAge = calculateAge(1974);
console.log(varAge);

//a more complex function calls first function above as well as does additional work
//does not return a value to the caller but logs instead
function yearsUntilRetire(year, firstName) {
    //call to first function which returns age
    var age = calculateAge(year);
    var retirement = 70 - age;

    if (retirement > 0) {
        console.log(firstName + " retires in " + retirement + " years.");
    } else {
        console.log(firstName + " is already retired.");
    }
    
    
}

yearsUntilRetire(1934, "Darren");
yearsUntilRetire(2005, "Griff");

*/

//------------------------------------------------------------------------------
// Function Statements and Expressions

// Function Statements are another way to write functions.
// Anything that produces a result is an "Expression"
// Function Statements produce an immediate result; whereas, Function Declarations do NOT.
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        //note: "return, negates the need to 'break' the statement"
        case "teacher":
            return firstName + ' teaches kids to code.';
        case "driver":
            return firstName + ' drives an Uber.';
        case "karate master":
            return firstName + ' kicks butts.';
        default:
            return firstName + ' is unemployed.';
    }
}

console.log(whatDoYouDo('karate master','darren'));
*/

//--------------------------------------------------------------------------------
// Arrays
// Arrays in JS look and act much like lists in python.
// Arrays are ordered structures like lists in python.


//can create array two ways.  First way looks like python list
//var names = ['darren','dan','Jane'];

//second way to create is to use Array function and pass in data
//var years = new Array(1990, 1969, 1948);

//like python list, JS array indexes start at ordinal number 0
//access first element in 'names' array. Again, like python lists
//console.log(names[0]);

//print number of elements in array
//console.log(names.length);


/* 
iterate over array and print entries.  This is simpler than python where
you need to do 'for i in range(len(names)):' else you get an 'index out of
range' error.  No such issue in JS as it handles index 0 without needing a 
special function such as 'range' to establish the starting point of 0
artificially.  Nice!!!
*/


// this works in javascript but is not the 'best' way to iterate.
// this is more python
/*
for (i in names) {
    console.log(names[i]);
*/

// this is more javascript way
//var i;
//for (i = 0; i < names.length; i++) {
//    console.log(names[i]);
//}

// like lists, arrays are mutable
//names[1] = 'Sasquatch';
//console.log(names[1]);


/*
unlike lists, you can access new indexes of an array, skipping indexes. "empty items" are
placed at the index values skipped.  These indexes are created but with "undefined" values
if you were to try to access them directly, see below.
*/

/*
names[5] = 'Hogwharts';
console.log(names);
console.log(names[3]);

// append item to end of array
names[names.length] = 'Godzilla';
console.log(names);

// Different data types allows (like lists)
var darren = ['Darren','Smith','Nerd',1974];
console.log(darren);

// array methods

// push method adds to end of array
darren.push('blue');
console.log(darren);

// unshift adds to beginning of array
darren.unshift('Mr');
console.log(darren);

// pop removes last element
darren.pop();
console.log(darren);

// shift removes first element
darren.shift()
console.log(darren);

// get index and print it
console.log(darren.indexOf(1974));

//example using terinary operator
var isBorn = darren.indexOf(1975) === -1 ? 'not there' : 'Darren was born in 1974';
*/

//-----------------------------------------------------------------------------------

// Objects and Properties
// Similar to a python dictionary, key/value pairs.  Order does not matter due to 
// key/value structure.

// 'john' is the object and the key/value pairs are the properties
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family : ['dave','bill','susan'],
    job: 'teacher',
    married: false
};

console.log(john);

// access properties via method
console.log(john.birthYear);

// access properties via key
console.log(john['lastName']);

// access via reference
var x = 'birthYear';
console.log(john[x]);

// mutate
john.job = 'designer';
john['married'] = true;
console.log(john);

// 'new object' method of creating an object
var jane = new Object();
jane.name = 'Jame';
jane.birthYear = 1998;
jane.lastName = 'jones';

console.log(jane);

*/

//------------------------------------------------------------------------------------------

// Methods
// Attach functions to objects.

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    family : ['dave','bill','susan'],
    job: 'teacher',
    married: false,
    // the value for this key is a function that calculates age
    calcAge: function(birthYear) {
        return 2018 - birthYear;
    }
};

// get age by calling john's calcAge method and passing in birth year
console.log(john.calcAge(1990));

// what if birth year was already in the object so no need to pass it in?

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family : ['dave','bill','susan'],
    job: 'teacher',
    married: false,
    // function takes no arguments and refers to itself "this."
    calcAge: function() {
        return 2018 - this.birthYear;
    }
};

console.log(john.calcAge());

// what if we want to calculate the age and store it the object?

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family : ['dave','bill','susan'],
    job: 'teacher',
    married: false,
    // function takes no arguments and refers to itself "this."
    calcAge: function() {
        return 2018 - this.birthYear;
        // 2. or set it directly w/o returning
        // this.age = 2018 - this.birthYear;
    }
};

// create a new property and set it equal to the return value of calcAge
john.age = (john.calcAge());
console.log(john);

// 2. or set it directly w/o return
// john.calcAge();

*/

//---------------------------------------------------------------------------------------

// Loops and Iteration

// for loop
/* 
for (establish counter; test condition; increment{
     execute statement;
}
*/

/*
// simple loop that counts to 10
for (var i = 1; i <= 10; i++) {
    console.log(i);    
}

// simple loop that counts to 10, even only
for (var i = 2; i <= 10; i+=2) {
    console.log(i);    
}

// loop through array, pythonic and may not be reliable in javascript
var darren = ['Darren','Smith','Nerd',1974];
for (i in darren) {
    console.log(darren[i]);
}

// loop through array, 2nd method, the javascript way
// (not as concise as above but in the lecture notes)
// recall, like python lists, arrays start at index 0 
for (var i = 0; i < darren.length; i++) {
    console.log(darren[i]);
}

// while loop in javascript is similar to python syntax
while (i < darren.length) {
    console.log(darren[i]);
    i++;
}

// continue and break statements
// what if we wanted to print string array items only?
for (var i = 0; i < darren.length; i++) {
    if (typeof darren[i] !== 'string') continue;
        console.log(darren[i]);
}

// what if we want to quit as soon as a non-string value is encountered?
for (var i = 0; i < darren.length; i++) {
    if (typeof darren[i] !== 'string') break;
        console.log(darren[i]);
}

// looping backwards (countdown)
// start at number that equals length of array
// test for i being greater than or equal to index 0
// decrement i by 1

for (var i = darren.length; i >= 0; i--) {
    console.log(darren[i]);
}

*/

//-------------------------------------------------------------------

// Object Creation Chain
// Hoisting - javascript loads all function statements and variables as the program starts
// the code below where function call is made before declaration is legal in JS

/*

// hoisted call - function called then defined
nameHello("Darren");

function nameHello(name) {
    console.log(name);
}

// traditional call - function defined then called
function callAge(age) {
    console.log(age);
}

callAge(44);

// Hosting does not work on function expressions.  This will error
retirement(1974);

var retirement = function(birYear) {
    console.log(70 - (2018 - birYear));
}

// for function expressions, you have to employ traditional function/call order
var retirement = function(birYear) {
    console.log(70 - (2018 - birYear));
}


retirement(1974);

// Hoisted variables - javascript loads all variables as the program starts and assigns them as 
// 'undefined' until they are formally declared

// console log statement below will show in browser as undefined as opposed to error
console.log(LastName);
var lastName = "Smith";

//If called after the assignment, will log "Smith"
console.log(lastName);

*/

//------------------------------------------------------------------------------------------------

// Scope Chain Creation

// In JS scopes are global or function scoped, thats it...
// Global scope is accessible to all including functions
// Function scopes are lexical:
// a) Child Function has access to its own variables, it's parent function variables, as well as global variables
// b) Parent Function has access to its own variables and global variables, but not child function variables
// c) Code outside of functions has access to global variables but not any function variables
// Note:  The only way that code outside functions has access to variables inside functions is for the 
// variables to be 'returned' from the function

// scope chain example
//global
/*
var a = 'hello';

// hoisted because this is called before it is defined
first();

//parent function
function first() {
    var b = 'hi';
    // hoisted because this is called before it is defined
    second();

    //child function
    function second() {
        var c = "hey";
        //function second has access to variables 'a', 'b', and 'c'
        console.log(a + b + c);
    }
}

// example of execution stack versus chain.  Code below should error as it would have no access to variables 'b' and 'c'
// this function only has access to 'a', (scoped globally) and 'd', its own variable.
// it is not in the first ==> second function chain.

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

third()

*/

//--------------------------------------------------------------------------------------------------------------------------

// Key Word 'this'
// Last step in creation chain
// In regular function call, 'this' refers to the global object
// In a method call (such as within an object), this refers to the calling object
// Note: 'this' does NOT exist until an execution context is called

// show the 'window object' (the default object) in console
// console.log(this);

/*
// 'this' attached to the default object when called from a function
calculateAge(1987);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}
*/

// 'this' attached to a method call will display the calling object

/*
var darren = {
    name : 'darren',
    lName : 'smith',
    bYear : 1974,
    calculateAge : function () {
        console.log(this);
        console.log(2018 - this.bYear);

        //function innerFunction() {
            // this will display the window (default object)
        //   console.log(this);
        //}
        // innerFunction();
    }
}

darren.calculateAge();

var mike = {
    mName : "Mike",
    bYear : 1984,
};

// "method borrowing", can use darren.calculateAge to calculate mike's age
// reduces rewrite of code by using the function contained within another object
mike.calculateAge = darren.calculateAge;

// calculate mike's age
mike.calculateAge();
*/