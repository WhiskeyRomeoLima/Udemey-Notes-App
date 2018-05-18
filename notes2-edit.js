/*jshint esversion: 6 */

const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find((note) => note.id === note.id);

if (!note) {
    location.assign('notes2.html');
}
