// listen for form submit 

document.getElementById('myForm').addEventListener('submit', saveBookmark);
// save bookmark
function saveBookmark (e) {
	// get form values
	var siteName =document.getElementById('siteName').value;
	var siteUrl =document.getElementById('siteUrl').value;

	var bookmark = {
		name: siteName,
		url: siteUrl
	}
	/*
	// local storage exmaple
	localStorage.setItem('test', 'Hello World');
	console.log(localStorage.getItem('test'));
	localStorage.removeItem('test');
	console.log(localStorage.getItem('test'));
*/

 if(localStorage.getItem('bookmarks') === null) {
 	// start array
 	var bookmarks = [];
 	// add to array
 	bookmarks.push(bookmark);
 	// set to localstorage
 	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
 } else {
 	// get bookmarks from local storage
 	var bookmarks = JSON.parse(localstorage.getItem('bookmarks'));
 	// add bookmarks to array
 	bookmarks.push(bookmark);
 	// re-set it back to local storage
 	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
 }
 

    // prevent form from submitting
	e.preventDefault();
}