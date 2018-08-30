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
// Lecture:  variable mutatioon and type coersion

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
age = 'fourty four';

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

//handy incrementer in javascript
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
if (isMarried){
    console.log(firstName + " is married");
} else {
    console.log(firstName + " is not married");
}

*/

//---------------------------------------------------------
// boolean logic

/*
var firstame = "john";
var age = 16;

if (age < 13) {
    console.log(firstame + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstame + ' is a teenager'); // boolean 'and' operation
} else {
    console.log(firstname + ' is a man');
}

*/

//--------------------------------------------------------------------------
//Terinary operator and switch statements
/*
var firstName = "john";
var age = 45;

//terniary operator has 3 parts and is shorthand for if/else
//parts are condition, if'?', else ':'
age >= 18 ? console.log(firstName + " can drink a beer")
: console.log(firstName + " can drink a water");

// short hand for popluating a variable based on a condition
var drink = age >= 18 ? 'beer' : 'water';
console.log(firstName + " can drink " + drink);

//use ternary operator for if/else for non-complex statements

//switch statement

var job = 'karate master';
switch (job) {
    //case 1 response to both teacher and instructor
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
//tuthy values are all values NOT falsy
/*
var height;

height = 23; //tuthy when 23 assigned, comment out and it becomes fasly

// height = 0; //is undefined by default unless dealt with in the code

// OR statement deals with 0 to make it truthy.  See rules above
if (height || height === 0) {
    console.log('Variable has been defined');
} else {
    cpnsole.log('Variable has not been defined');
}

// '===' vs '=='
if (height == '23') {
    console.log('The == operator does type corercion!!!');
    console.log('This means 23 == "23"');
    // ===  does strick comparison and is best practice.  23 and 
    // '23' are NOT equal when using ===
} 

*/
//------------------------------------------------------------------

//Function Declaration
//DRY = DO NOT REPEAT YOURSELF ---> FUNCTIONS
/*
//basic functon
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

// Another way to write functions.
// Anything that produces a result is an "Expression"
// Function Statements produce an immediate resulte; whereas, Function Declarations do NOT.
/*
var whatDoYouDo = function(job, firstname) {
    switch(job) {
        //note: "return, negates the need to 'break' the statement"
        case "teacher":
            return firstname + ' teaches kids to code.';
        case "driver":
            return firstname + ' drives an Uber.';
        case "karate master":
            return firstname + ' kicks butts.';
        default:
            return firstname + ' is unemployed.';
    }
}

console.log(whatDoYouDo('karate master','darren'));
*/

//--------------------------------------------------------------------------------
// Arrays
// Arrays in JS look and act much like lists in python.
// Arrays are ordered structures like lists in python.

/*
//can create array two ways.  First way looks like python list
var names = ['darren','dan','Jane'];
//second way use Array function and pass in data
var years = new Array(1990, 1969, 1948);

//like python list, JS array indexes start at ordinal number 0
//access first element in 'names' array. Again, like python lists
console.log(names[0]);

//print number of elements in array
console.log(names.length);
*/

/* 
iterate over array and print entries.  This is simpler than python where
you need to do 'for i in range(len(names)):' else you get an 'index out of
range' error.  No such issue in JS as it handles index 0 without needing a 
special function such as 'range' to establish the starting point of 0
artificially.  Nice!!!
*/
/*
for (i in names) {
    console.log(names[i]);
}

// like lists, arrays are mutable
names[1] = 'Sasquatch';
console.log(names[1]);
*/

/*
unlike lists, you can access new indexes of an array, skipping indexes. "emtpy items" are
placed at the index values skipped.  Thise indexes are created but with "undefined" values
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

// shift adds to beginning of array
darren.unshift('Mr');
console.log(darren);

// remove last element
darren.pop();
console.log(darren);

// remove first element
darren.shift()
console.log(darren);

// get index and print
console.log(darren.indexOf(1974));

// example using terninary operator
var isBorn = darren.indexOf(1975) === -1 ? 'not there' : 'Darren was born in 1974';
console.log(isBorn);
*/

//-----------------------------------------------------------------------------------

// Ojects and Properties
// Similar to a python dictionary, key/value pairs.  Order does not matter due to 
// key/value structure.

// 'john' is the object and the key/value pairs are the properties
/*
var john = {
    firstname: 'John',
    lastname: 'Smith',
    birthYear: 1990,
    family : ['dave','bill','susan'],
    job: 'teacher',
    married: false
};

console.log(john);

// access properties via method
console.log(john.birthYear);

// access properties via key
console.log(john['lastname']);

// access via reference
var x = 'birthYear';
console.log(john[x]);

// mutate
john.job = 'designer';
john['married'] = true;
console.log(john);

// now object method of creating an object
var jane = new Object();
jane.name = 'Jame';
jane.birthYear = 1998;
jane.lastname = 'jones';

console.log(jane);

*/

//------------------------------------------------------------------------------------------

// Methods
// Attach functions to ojects.

/*
var john = {
    firstname: 'John',
    lastname: 'Smith',
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

// what if birthyear was already in the object so no need to pass it in?

var john = {
    firstname: 'John',
    lastname: 'Smith',
    birthyear: 1990,
    family : ['dave','bill','susan'],
    job: 'teacher',
    married: false,
    // function takes no arguments and refers to itself "this."
    calcAge: function() {
        return 2018 - this.birthyear;
    }
};

console.log(john.calcAge());

// what if we want to calculate the age and store it the object?

var john = {
    firstname: 'John',
    lastname: 'Smith',
    birthyear: 1990,
    family : ['dave','bill','susan'],
    job: 'teacher',
    married: false,
    // function takes no arguments and refers to itself "this."
    calcAge: function() {
        return 2018 - this.birthyear;
        // 2. or set it directly w/o returning
        // this.age = 2018 - this.birthyear;
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
// a) establish counter, b) test condition, c) increment

// simple loop that counts to 10
for (var i = 1; i <= 10; i++) {
    console.log(i);    
}

// simple loop that counts to 10, even only
for (var i = 2; i <= 10; i+=2) {
    console.log(i);    
}

// loop through array
var darren = ['Darren','Smith','Nerd',1974];
for (i in darren) {
    console.log(darren[i]);
}

// loop through array, 2nd method 
// (not as concise as above but in the lecture notes)
// recall, like python lists, arrays start at index 0 
for (var i = 0; i < darren.length; i++) {
    console.log(darren[i]);
}

// while loop
while (i < darren.length) {
    console.log(darren[i]);
    i++;
}

// continue and break statements
// what if we wanted only strings from array?
for (var i = 0; i < darren.length; i++) {
    if (typeof darren[i] !== 'string') continue;
        console.log(darren[i]);
}

// what if we want to quit as soon as non-string value is encountered?
for (var i = 0; i < darren.length; i++) {
    if (typeof darren[i] !== 'string') break;
        console.log(darren[i]);
}

// loop backwards
// start at number that equals lenght of array
// test for i being greater or equal to index 0
// decrement i by 1

for (var i = darren.length; i >= 0; i--) {
    console.log(darren[i]);
}
