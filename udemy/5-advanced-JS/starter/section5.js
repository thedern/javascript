// Creating Objects - Function Constructor

// create specific object - 'john', not necessarily reuseable

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// function constructor (blueprint).  Does not return anything but allows for the creation of an object
// Note: Cap letter always used in name of function

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};
*/

/*

// usage - instanciate 'john'
// 'new' is an operator that creates an empty object which receives the constructor function 'Person'

// var john = new Person('John', 1990, 'teacher');

// inheritance
// We are utilizing the Person object and adding to it in order to calculate age.
// We do not need to edit the Person object, but utilize its prototype 

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

// create additional objects

var jane = new Person('Jane', 1974, 'doctor');

var mark = new Person('Mark', 1948, 'retired');

// We can now call the method for calculateAge on each object!

jane.calculateAge();
mark.calculateAge();
john.calculateAge();

console.log(jane.lastName);
console.log(mark.lastName);
console.log(john.lastName);

*/

/* ==========================================================================
   EXAMPLE 1:  Object Function Constructor
   ========================================================================== */

/*
// example
var jiujitsu = function(name, rank, school, startYear) {
    this.name = name;
    this.rank = rank;
    this.school = school;
    this.startYear = startYear;
};

// inheritance to add experience calculation
jiujitsu.prototype.calcExperience = function() {
    this.yearsExperience = (2018 - this.startYear);
};

// inheritance to add favorite technique properite
jiujitsu.prototype.favTechnique = function(favTechnique) {
    this.favTechnique = favTechnique;
};

jiujitsu.prototype.stripes = function(stripes) {
    this.stripes = stripes;
};

// instantiate darren
var darren = new jiujitsu('Darren', 'blue', '804-jiujitsu', 2016);
console.log(darren);

// add onto darren
darren.calcExperience();
darren.favTechnique('americana');
darren.stripes('no stripes');

// log darren
console.log(darren);
*/

/* ==========================================================================
   EXAMPLE 2:  Object Function Constructor
   ========================================================================== */

/*
// example parent object - Vehicle
var Vehicle = function (type, manufacturer, year, doors, color) {
    this.type = type;
    this.manufacturer = manufacturer;
    this.year = year;
    this.doors = doors;
    this.color = color;

};

// instantiate jeep
var wrangler = new Vehicle ('suv', 'Jeep', 2006, 2, 'yellow');

// log jeep
console.log(wrangler);

// inheritance to add calculate age function to create age property
// function takes no arguments
Vehicle.prototype.calcAge = function() {
    this.vehicleAge = (2018 - this.year);
};

wrangler.calcAge();

// inheritance add new property
Vehicle.prototype.engineSize = function(engineSize) {
    this.engineSize = engineSize;
};

// update wrangler object with engine size
wrangler.engineSize('6 cylinder');

*/
/* ==========================================================================
   Object.create:  Object protyping (second way to create and object)
   ========================================================================== */
// benefit of this method is it allows you to define your own prototype.

/*
// create a prototype
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

// call protoype creating a new empty object containing only the calculate age function
// contains only the calculateAge function
var john = Object.create(personProto);

// add additional properties to object AFTER creation
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// call prototype and add additional properties at the same time
// contains calculate age AND the properties below at the instantiation
var jane = Object.create(personProto,
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'artist'}
    });
*/

/* ==========================================================================
   Primitives vs Objects
   ========================================================================== */
/*
// variables for primitives contain the data stored in the variable
// variables for objects do not contain the object, but a reference to the object stored in memory 
   
// each variable gets its own copy of the data
var a = 23;
var b = a;
a = 43;  // mutate a
console.log(a);
console.log(b);

// objects
var obj1 = {
    name: 'john',
    age: 26
};

// set obj2
var obj2 = obj1;

// obj1.age
obj1.age = 30;

// both obj1.age and obj2.age are 30 because obj2 is a reference to obj1's memory space
console.log(obj1.age);
console.log(obj2.age);

// functions

var age = 27;
var obj = {
    name: 'darren',
    city:'richmond'
};

// function def
function change(a, b) {
    a = 30;
    b.city = 'san francisco';
}

//function call
change(age, obj);

console.log(age);
console.log(obj.city);
*/

/* ==========================================================================
   First Class Functions, Functions as Arguments
   ========================================================================== */

/* Function is an instance of the oject type, thus behaves like an object
      We can store functions in a variable

      We can pass a function as an argument to another function.
      A callback function, also known as a higher-order function, 
      is a function that is passed to another function 

      we can return a function from a function

      This is why functions are called "First Class"
*/

// function as an argument (callback functions)

var years = [1990, 1965, 1937, 2005, 1998];

// generic calculator function takes array and another function as arguments
function arrayCalc(arr, fn) {
    // declare new array
    var arrRes = [];
    // loops over input array
    for (var i = 0; i < arr.length; i++) {
        // takes function result and populates new array
        arrRes.push(fn(arr[i]));
    }
    // returns the new array
    return arrRes;
}

// functions that take 'elements as input', Callback Functions
function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate (el) {
    // formula only valid for people between 18 and 81 years old.
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

// function calls to arrayCalc


var ages = arrayCalc(years, calculateAge);
console.log(ages);

// uses ages result from above
var fullAge = arrayCalc(ages, isFullAge);
console.log(fullAge);

// uses ages result from first call
var maxHR = arrayCalc(ages, maxHeartRate);
console.log(maxHR);

/* ==========================================================================
   Function that returns a Function
   ========================================================================== */

// Function that takes an argument 'job', and returns an unnamed function that takes argument 'name'.
// Functions in js are first class; therefore, returning a function from a function is the same thing
// returning an object from a function

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        };
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name +', what subject do you teach?');
        };
    } else {
        return function(name) {
            console.log(name +', what do you do?');
        };
    }
}

// function call to get question type.  Function is returned and stored in 'teacherQuestion'
var teacherQuestion = interviewQuestion('teacher');

// function call to generate question
teacherQuestion('john');


// function call to get question type.  Function is returned and stored in 'teacherQuestion'
var designerQuestion = interviewQuestion('designer');

// function call to generate question
designerQuestion('dave');

// shorthand w/o saving the function to a variable
interviewQuestion('teacher')('mark');

/* ==========================================================================
   Immediately Invoked Function Expressions IIFE
   ========================================================================== */

// game function
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

// function call
game();


// shorthand for above (IIFE). Defined and called in a single step.
// whole thing in parenthesis is treated as an expression and not a statement
// when expression, does not need to be declared before executed.
// IIFE is not reusable.  It is not passed to a variable. Runs once.
// creates data privacy as variables are NOT accessible outside the IIFE

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// example with an argument.  Passes in 5.

(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);

/* ==========================================================================
   Closures
   ========================================================================== */

function retire(retirementAge) {
    var a = 'years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    };
}

// returns a function to retireUS
var retireUS = retire(66);

// the pass year of birth, 1990 into the function contained within variable 'retireUS'
retireUS(1990);


// shorthand for above calls the first and then the second function without first passing function to variable
// closure, outter function and then inner function.  Even if a function returns and its excution context is gone,
// its variables are still available in memory to the child functions in the scope chain
retire(66)(1990);
retire(77)(1974);


// interview question rewritten as a closure.  Shortens the amount of code by around 2/3. See line 287
function interviews(job) {
    // anonymous function has access to 'job' due to lexical scope.
    return function(name){
        if (job === 'designer') {
            console.log( name + ' what do you design?');
        } else if (job === 'teacher') {
            console.log( name + ' what do you teach?');
        } else {
            console.log( 'hello ' + name);
        }
    };
}

// call function interviews
interviews('teacher')('darren');

/* ==========================================================================
   Bind Call and Apply
   ========================================================================== */


var bill = {
    name: 'dave',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeofDay) {
        if(style === 'formal') {
            console.log('Good ' + timeofDay + ' Ladies and Gentlemen, I am ' + this.name + ' and a ' + this.job);
        } else if (style === 'freindly') {
            console.log('sup peeps ' + timeofDay + ' yo!');
        }
    }
};

bill.presentation('formal', 'morning');


var emily = {
    name: 'emily',
    age: 35,
    job: 'designer'
};

// use 'call' to borrow the presentation function from bill and give to emily
// this is method borrowing
bill.presentation.call(emily, 'formal', 'morning');

// apply is similar to 'call' but uses an array
// bill.presentation.apply(emily,['friendly', 'morning'])

// bind method returns function
var billFriendly = bill.presentation.bind(bill, 'formal');

billFriendly('morning');









