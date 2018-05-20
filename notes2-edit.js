/*jshint esversion: 6 */
const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const noteId = location.hash.substring(1);
const dateEdited = document.querySelector('#last-edited');

notes = getSavedNotes();

let note = notes.find((note) => note.id === noteId);

if (note === undefined) {
    location.assign('notes2.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;

//update 'title'
titleElement.addEventListener('input', function (e){
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    saveNotes(notes);
    dateEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;
});

//update 'body'
bodyElement.addEventListener('input', function (e){
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    saveNotes(notes);
    dateEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;
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
        
        if (note) {
            location.assign('notes2.html');
        }
        
        titleElement.value = note.title;
        bodyElement.value = note.body;
        dateEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;
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