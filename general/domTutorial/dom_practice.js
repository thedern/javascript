/* vanilla javascript, no jquery */

/* ==========================================================================
   show all properties and methods of the document object
   ========================================================================== */

/*

// show me everything
console.dir(document);

// examples of specific properties and methods of document object that can be accessed and changed via js
console.log(document.domain);
console.log(document.url);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);

// produce a collection (not array) of everything in the dom
console.log(document.all);

// produce an collection (not array) of everything in the dom, get index 10
console.log(document.all[10]);

// change what is at index[10] from what it was to 'hello'
// note: this is not the way you want to change things, but is an illustration of what is accessible
document.all[10].textContent = 'hello';

// get all forms
console.log(document.forms);

// if you do not have property, you get empty collections
console.log(document.images);

*/

/* ==========================================================================
   get element by ID
   ========================================================================== */
/* 

console.log(document.getElementById('header-title'));

// pass to variable
var headerT = document.getElementById('header-title');
var headerM = document.getElementById('main-header');

// html only, disregards style
headerT.textContent = 'Hello';
// html and style applied.  Note, will look the same as textContent if no style applied
headerT.innerText = 'Hello';
// change tag AND markup text
headerT.innerHTML = '<h3>Hello</h3>';
// change CSS
headerM.style.borderBottom = 'solid 5px #000';

*/

/* ==========================================================================
   get elements (plural) by classname
   ========================================================================== */

/*

// get list items (collection, behaves like array)

var items = document.getElementsByClassName('list-group-item');
console.log(items);

// change a specific li
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// change style on all in collection you need to loop through
for (i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}

// code below is not valid and will error as it does not properly act on collection returned by DOM
// items.style.backgroundColor = '#f4f4f4';

*/

/* ==========================================================================
   get elements by tag name
   ========================================================================== */
/*

// similar to classname above but acts on every tag on page regardless of tag

var li = document.getElementsByTagName('li');
console.log(items);
   
// change a specific li
li[3].textContent = 'hello 4';
li[3].style.fontWeight = 'bold';
li[3].style.backgroundColor = 'blue';
   
// change style on all in collection you need to loop through
for (i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'green';
}

*/

/* ==========================================================================
   queryslector
   ========================================================================== */

// useed for ONE item, applied to first itme it finds on page that matches query
// can take anything on page in html OR css

/* 

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'hello world!';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

// will act on first li it fings
var item = document.querySelector('.list-group-item');
item.style.color = 'white';

// get last item
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

// nth child to get second item
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

*/

/* ==========================================================================
   queryselectorall
   ========================================================================== */

/* 

var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'hello!!!!!';

// apply to odd only using CSS 'odd' pseudoselector
var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
}

// apply to even only using CSS 'even' pseudoselector
var even = document.querySelectorAll('li:nth-child(even)');

for (var x = 0; x < even.length; x++) {
    even[x].style.backgroundColor = '#ccc';
}

*/

/* ==========================================================================
   traversing the DOM
   ========================================================================== */

// DOM parent --> child/siblings
// note:  check js console in chrome debugging tools to verify results of your selections

// get id items

var itemList = document.querySelector('#items');
/*

// get parentNode of #items
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';

// get parentNode of parentNode of #items (2 levels up the tree)
console.log(itemList.parentNode.parentNode);
itemList.parentNode.parentNode.style.backgroundColor = 'coral';

// parentElement is interchangeable with parentNode
// get parentElemet of #items
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// childNodes
// note:  'text' nodes returned in collections represent linebreaks between the list items
console.log(itemList.childNodes);

// children
// note:  this is preferred as linebreaks are not returned.
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';


// FirstElementChild of itemList
console.log(itemList.firstElementChild); 
itemList.firstElementChild.textContent = 'Halloween';

// lastElementChild of itemList
console.log(itemList.lastElementChild); 
itemList.lastElementChild.textContent = 'Christmas';

// nextElementSibling of itemList (returns null if has no siblings)
console.log(itemList.nextElementSibling);

// previousElementSibling of itemList(returns null if has no siblings)
// in this case, returns h2 tag that comes before the ul tag
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'red';

*/

/* ==========================================================================
   create and insert elements into DOM
   ========================================================================== */
/*
// create a div
var newDiv = document.createElement('div');

// add class to newDiv
newDiv.className = 'test123';
console.log(newDiv);

// add id to newDev
newDiv.id = 'hello';

// add attribute
newDiv.setAttribute('title', 'greeting1');

// create text node so we may add content to div later
var newDivText = document.createTextNode('Helllllllo  World');

// add child element to div which contains text
newDiv.appendChild(newDivText);

// add style
newDiv.style.fontSize = '30px';

// insert child elenment into DOM so shows on page
// get header
var conatiner = document.querySelector('header .container');
// get h1
var h1 = document.querySelector('header h1');
// insert into DOM (inserts newDiv and its child (containing content) before the h1 in the header)
conatiner.insertBefore(newDiv, h1);

*/

/* ==========================================================================
   event listeners - button
   ========================================================================== */

/*

// option 1: anonymous function
var button = document.getElementById('button').addEventListener('click', function() {
    console.log(123);
});

// option 2: named function (preferred)
var button = document.getElementById('button').addEventListener('click', buttonClick);

// event object notes
function buttonClick(e) {
    // console.log('Button Clicked');
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';

    // console.log(e);

    // log the element that fired the event
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    // populate div with id of 'output' with an h3 with the event target
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';

    // log the event type
    console.log(e.type);

    // mouse coordinates from window when clicked
    console.log(e.clientX);
    console.log(e.clientY);

    // mouse coordinates from element when clicked
    console.log(e.offsetX);
    console.log(e.offsetY);

    // logs boolean if key is held down while button is clicked
    // use-case is if/else statements
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);


}

*/

/* ==========================================================================
   mouse events and keyboard and input events
   ========================================================================== */
/*
var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

//mouseover fires when entering the box and again when over any child elements within the box
box.addEventListener('mouseover', runEvent);
//mouseout fires when leaving any child elements within the box as well as leaving the box itself
box.addEventListener('mouseout', runEvent);

//fires whenever the mouse moves when the pointer is in the box
box.addEventListener('mousemove', runEvent);

*/

var intemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select')

// runs when you push down a key
intemInput.addEventListener('keydown', runEvent);

// runs when you release the key
intemInput.addEventListener('keyup', runEvent);

// runs when you press a key
intemInput.addEventListener('keypress', runEvent);

// runs when you click in a field, focus
intemInput.addEventListener('focus', runEvent);

// runs when you click out of a field, remove focus
intemInput.addEventListener('blur', runEvent);

// event fires on cutting
intemInput.addEventListener('cut', runEvent);

// event fires on pasting
intemInput.addEventListener('paste', runEvent);

// fires on anything you do with the inpute
intemInput.addEventListener('input', runEvent);

// fires when the select pulldown changes
select.addEventListener('change', runEvent);

// fires when form is submitted
form.addEventListener('submit', runEvent);

/// e is the event
function runEvent(e) {
    console.log('EVENT TYPE: '+e.type);

    // log what is being typed in form
    console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

    // tracks and displays mouse position while moving inside box
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

    // have mouse movements correspond to red and green rgb values
    // as mouse moves the numeric values of red and green change based on mouse coordinates
    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

}

/* ==========================================================================
   
   ========================================================================== */


