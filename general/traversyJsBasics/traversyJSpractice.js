/* ==========================================================================
   Data Types
   ========================================================================== */

// Numbers

var number1 = 35;
var number2 = 40;

console.log(number1 + number2);

// String

var number1 = '35';
var number2 = '40';

console.log('My favortite number is '+number1+number2);

// Variable Rules

/**
 * variables can contain numbers, letters, underscores, and dollar signs
 * begin with a letter, dollar sign or underscore
 * case sensitive
 * camelCase is best practice
 */

 // ARRAYS

var colors = ['red','blue','green'];
console.log(colors);
console.log(colors[1]);

var colors2 = new Array('yellow', 'pink', 'brown');
console.log(colors2);

// add to array 1
colors[3] = 'black';
console.log(colors);

// add to array 2
colors.push('purple');
console.log(colors[4]);

var numbers = [ 1, 2, 3, 4, 5 ];
console.log(numbers[0] + numbers[3]);

// show how many values in array
console.log(colors.length);

// sort by value
console.log(numbers.sort());
console.log(numbers.reverse());

// LOOPS

// for
for(var i = 0; i < 10; i++) {
    console.log(i);
}

// while
var j = 0;
while(j < 10) {
    console.log(j);
    j++;
}

// forEach
var numbers2 = [34, 56, 87, 12, 100]
numbers2.forEach(function(num){
    console.log(num);
});

// for loop iterate through numbers2
for(var i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}

/* ==========================================================================
   Conditionals
   ========================================================================== */
var1 = 3;
var2 = 4;
if (1 == 1 && var1 == var2) {
    console.log('correct')
} else {
    console.log('incorrect')
}

// switch
/*
var fruit = 'grapes';

switch(fruit) {
    case "banana":
        alert("I hate bananas")
        break;
    case "apples":
        alert("I love apples")
        break;
    default:
        alert("I hate all other fruits")
        break;

}
*/

/* ==========================================================================
   Objects
   ========================================================================== */


/**
 * object literal
 * can contain: strings, integers, arrays, other objects, functions
 */

var person = {
    fname: 'darren',
    lname: 'smith',
    byear: 1974,
    // array
    children: ['griff', 'tristan', 'harry'],

    // object
    address: {
        street: '555 something',
        city: 'Boston',
        state: 'MA'
    },

    // object method (internal function)
    calcAge: function() {
        return 2018 - this.byear;
    },

    // object method (internal function)
    fullname: function() {
        return this.fname +' '+ this.lname;
    },

    // // object methon (internal function and callback function)
    canRetire: function(retAge) {
        if (retAge > this.calcAge()) {
            console.log('cannot retire');
        } else {
            console.log('can retire');
        }
    }
}

console.log(person.fname);
console.log(person.children[2]);
console.log(person.address.street);
console.log(person.calcAge());
// no need to console log, canRetire logs on execution
person.canRetire(74);
console.log(person.fullname());


/**
 * object constructor
 */

var apple = new Object();
apple.color = 'red';
apple.shape = 'round';
apple.describe = function() {
    return 'apple color is ' + this.color+ ' and apple shape is ' +this.shape;
}

console.log(apple.color);
console.log(apple.describe());


/**
 * object constructor using general pattern
 */

// object name begins with a cap
function Fruit(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;
    
    // object method (internal function)
    this.describe = function() {
        return 'A '+this.name+' is '+this.color+' and '+this.shape;
    }
}

// Object name 'Fruit' must begin with a cap
var pear = new Fruit('pear', 'green', 'odd-shaped');
var banana = new Fruit('banana', 'yellow', 'cylindrical');

console.log(pear.shape);
console.log(pear.describe());


/**
 * array of objects
 */

var users = [
{
    name: "john Doe",
    age: 30
},

{
    name: "jane Doe",
    age: 32
},

{
    name: "bill Doe",
    age: 3
},

{
name: "mary Doe",
age: 25
}
     
];

console.log(users[0].name);

/* ==========================================================================
   Events  51 mins into video
   ========================================================================== */

document.getElementById('bruce').addEventListener('click', function(){
    this.textContent = 'your butt smells!';
    this.style.fontSize =  'xx-large';
    this.style.padding = 20;
    document.querySelector('body').style.background = 'brown';
    document.querySelector('body').style.color = 'white';   

    // get the date
    var time = Date();
    /**
     * process for inserting a new div with content into DOM
     */
    // create new div
    var newDiv = document.createElement('div');
    // create text node
    var newDivText = document.createTextNode(time);
    // add text node as child of newDiv
    newDiv.appendChild(newDivText);
    // add style to newDiv
    newDiv.style.fontSize = '30px';
    newDiv.style.marginTop = '20px';
    // insert child elenment into DOM so shows on page... various ways to do this:

    document.getElementById('container').appendChild(newDiv);
    
    //document.getElementsByClassName('container')[0].appendChild(newDiv);

    // var conatiner = document.querySelector('.container');
    //conatiner.append(newDiv);

    






});
