/*jshint esversion: 6 */
const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const noteId = location.hash.substring(1);

let aaaNewproperty = 'hello';
notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);

if (note === undefined) {
    location.assign('notes2.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', function (e){
    note.title = e.target.value;
    saveNotes(notes);
});

bodyElement.addEventListener('input', function (e){
    note.body = e.target.value;
    saveNotes(notes);
});

document.querySelector('#remove-note').addEventListener('click', function (e){
    removeNote(noteId);
    saveNotes(notes);
    location.assign('notes2.html');
});

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find((note) => note.id === noteId);
        
        if (note === undefined) {
            location.assign('notes2.html');
        }
        
        titleElement.value = note.title;
        bodyElement.value = note.body;
    }
});

/*

//common way to set a date
const now = new Date();
const timestamp = now.getTime();

//common way to retrieve a date
const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

*/