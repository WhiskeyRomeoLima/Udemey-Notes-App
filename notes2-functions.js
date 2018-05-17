/*jshint esversion: 6 */

//Read existing notes from localStorage
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
};

// Save notes to localStorage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
};

//reomve a note
const removeNote = function(id) {
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id;
    });
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
};

//genderate DOM structure for notes
const generateNoteDom = function(note){
    const noteEl = document.createElement('div');
    const button = document.createElement('button');
    const textEl = document.createElement('span');

    //setup remove button for note
    button.textContent = 'x';
    button.addEventListener('click', function() {
        removeNote(note.id);
        saveNotes(notes); //update localstorage
        renderNotes(notes, filters);
    });

    //note.title 
    if (note.title.length > 0){
        textEl.textContent = note.title;   
    } else {
        textEl.textContent = 'Unamed note'; 
    }
    //append to noteEl in this order
    noteEl.appendChild(button);
    noteEl.appendChild(textEl);
    return noteEl;
};

//pass the array notes and filter text
//return the note objects whose title matches the filter text
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) { //using Array.prototype.filter to creates a new array (notes array is never changed)
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());  //notes.title is a string so we are using String.prototye.includes
        //all strings include the empty string.  A string being a set of chars has the null set as a subset.  See comment at end of code.
    }); 
    //console.log('Filtered Notes ', filteredNotes);
    document.querySelector('#notes').innerHTML = ''; //clear the div containing the notes before rendering the filtered notes.  Otherwise we keep adding more notes.
    
    filteredNotes.forEach(function (note) {
        document.querySelector('#notes').appendChild(generateNoteDom(note));
    });
};