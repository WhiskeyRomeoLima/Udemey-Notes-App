/*jshint esversion: 6 */

const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find((note) => note.id === note.Id);
debugger
if (note === undefined) {
    location.assign('notes2.html');
}

document.querySelector('#note-title').value = note.title;
document.querySelector('#note-body').value = note.body;
