/*jshint esversion: 6 */

const notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

renderNotes(notes, filters); //initial search

document.querySelector('#create-note').addEventListener('click', function (e) {
    const noteId = uuidv4();
    const timestamp = moment().valueOf();
    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });
    saveNotes(notes);
    location.assign(`./edit-note.html#${noteId}`);
    //location.assign('edit-note.html#' + noteId);
});

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

// window.addEventListener('storage', function(e) {
//     if (e.key === 'notes') {
//         notes = JSON.parse(e.newValue); //notes were already update eleswhere so just get it
//         renderNotes(notes, filters);  //then just re-render this page
//     }
// });

// const birthDay = moment();
// birthDay.year(1949).month(3).date(3);
// console.log(birthDay.format('MMM D, YYYY'));



// document.querySelector('#todo-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(e.target.elements.to.value);
//     e.target.elements.firstName.value = '';
// });

/*
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

var result = words.filter(word => word.toLowerCase() === '');
console.log(result); //[]

var result = words.filter(word => word.toLocaleLowerCase().includes(''));
console.log(result); // true
*/

// An empty string occurs in every string. Specifically, a contiguous subset of the string must match the empty string. 
//Any empty subset is contiguous and any string has an empty string as such a subset.

// Returns true if and only if this string contains the specified sequence of char values.

// An empty set of char values exists in any string, at the beginning, end, and between characters. 
//Out of anything, you can extract nothing. 
//From a physical piece of string/yarn I can say that a zero-length portion exists within it.

// If contains returns true there is a possible substring invocation to get the string to find. 
//"aaa".substring(1,1) should return "", but don't quote me on that as I don't have an IDE at the moment.