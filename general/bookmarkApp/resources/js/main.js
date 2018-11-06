
// listen for form's submit button

// get the element myForm from DOM
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// e = event
function saveBookmark(e){
    // get values input into form, save boomark

    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    // validate input
    if (!validateForm(siteName, siteUrl)) {
        return false;
    }

    // create object to save to local storage
    var bookmark = {
        name: siteName,
        url: siteUrl,
    };

    /* save to local storage, strings
    
    // setItem is key, value
    localStorage.setItem('test', 'hello world');
    console.log(localStorage.getItem('test'));

    // delete for local storage
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));

    */

    // validation
    if (localStorage.getItem('bookmarks') === null) {
        // init array
        var bookmarks = [];
        // append to array
        bookmarks.push(bookmark);
        // save array to local storage as string from default JSON
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    } else {
        // get bookmarks array of objects from local storage as JSON from string (reverse of save)
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add bookmark to array
        bookmarks.push(bookmark);
        // save array back to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    
    // clear form after entry
    document.getElementById('myForm').reset();

    // refetch bookmarks to update screen
    fetchBookmarks()


    /* stops form from submitting to page so we can work with it
     * else runs in and out of session almost instantly after submit */
    e.preventDefault();
        
}

// Delete Bookmark

function deleteBookmark(url) {
    // check for url in storage  -- Could use this to prevent duplicate entries too
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for (var i = 0; i < bookmarks.length; i++) {
        if(bookmarks[i].url == url){
            // remove from array
            bookmarks.splice(i, 1);
           
        }
    }
     // reset storeage
     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

     // refetch bookmarks to update screen
     fetchBookmarks();
}

// Fetch Bookmarks called by HTML load

function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // get element from DOM
    var bookmarksResults = document.getElementById('bookmarksResults');

    // build output by looping through storage

    bookmarksResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        // append to the results html; use bootstrap class 'card'
        bookmarksResults.innerHTML += '<div class="card card-body bg-light mb-3">'+
                                            '<h3>'+name+
                                                ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> '+
                                                ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="'#'">Delete</a> '+
                                            '</h3>'+
                                      '</div>';
    }
}


function validateForm(siteName, siteUrl) {
    // validation for blank entries
    if (!siteName || !siteUrl) {
        alert('Please fill in form');
        // we don't want it keep going; test w/o this to see what the effects are
        return false;
    }
 
    // validation for URL
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    // if NOT a valid URL
    if(!siteUrl.match(regex)) {
        alert('Please use a valid URL.');
        return false;
    }

    // if passes validation
    return true;
}

