// Creating Objects - Function Constructor

// create specific object - 'john', not necessarily reuseable


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
}

// usage - instanciate 'john'
// 'new' is an operator that creates an empty object which receives the constructor function 'Person'

var john = new Person('John', 1990, 'teacher');

/* inheritance
   We are utilizing the Person object and adding to it in order to calculate age.
   We do not need to edit the Person object, but utilize its prototype */

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

/* ==========================================================================
   EXAMPLE 1:  Object Function Constructor
   ========================================================================== */


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

/* ==========================================================================
   EXAMPLE 2:  Object Function Constructor
   ========================================================================== */


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


/* ==========================================================================
   Object.create:  Object protyping (second way to create and object)
   ========================================================================== */
// benefit of this method is it allows you to define your own prototype.

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

/* ==========================================================================
   Primitives vs Objects
   ========================================================================== */

/* variables for primitives contain the data stored in the variable
   variables for objects do not contain the object, but a reference to the object stored in memory */
   
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


/* ==========================================================================
   First Class Functions, Functions as Arguments
   ========================================================================== */

/* Function is an instance of the oject type, thus behaves like an object
      We can store functions in a variable
      We can pass a function as an argument to another function
      we can return a function from a function

      This is why functions are called "First Class"
*/

// function as an argument

var years = [ 1990, 1965, 1937, 2005, 1998 ];

function arrayCalc(arr, fn) {
    // declare empty array
    var arrRes = [];
    // loop over array
    for (var i = 0; 1 < arr.length; ++i) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge
