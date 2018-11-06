
/* ==========================================================================
   this js supports project.html and is from Traversy's dom crashcourse #4
   ========================================================================== */

// get the element with id 'addForm' from html page
var form = document.getElementById('addForm');

// get the element with id 'items' from html page
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');

// form submit event, pass event to addItem function
form.addEventListener('submit', addItem);

// delete event, pass event to removeItem function
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);


// add item function grabs event 'e'
function addItem(e) {
    // preventDefault, does what it says stops default behavior of the submit event allowing us to work with it
    e.preventDefault();

    // capture the input value from html element where id ='item' on html page
    var newItem = document.getElementById('item').value;


    // create a new li when submit button is clicked
    var li = document.createElement('li');
    // add bootstrap class to li
    li.className = 'list-group-item';
    // add captured text held in 'newItem' variable to li
    li.appendChild(document.createTextNode(newItem));


    // create del button element
    var deleteBtn = document.createElement('button');
    // add bootstrap classes to button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // add text to button
    deleteBtn.appendChild(document.createTextNode('X'));
    // add button to li
    li.appendChild(deleteBtn);


    // append completed li to itemList; displays in html page
    itemList.appendChild(li);
}


function removeItem(e) {
    // action only pertains to delete button when triggered by click event
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')) {
            // get parent element of delete button, which is the li
            var li = e.target.parentElement;
            // remove the li from itemList
            itemList.removeChild(li);
        }
    }
}

// filter items
// type in items into search box and see if the match any of the items in the ul
// can type in either upper or lowercase, it will be converted to lowercase
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get all li's
    var items = itemList.getElementsByTagName('li');
    // turn html collection into an js array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        // test for match between itemname and search box text
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

}