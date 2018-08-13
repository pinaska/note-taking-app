

// get the new note once button is clicked
document.querySelector('.add-new-note').addEventListener('click', function(e){
    addNewNote();
});

function addNewNote(){
    //get the placeholder tekst into note
    var getText = document.querySelector('.textarea').value;
    //reset the text area
    document.querySelector('.textarea').value = '';

    var newNoteText = document.createTextNode(getText);
    //create the node = div
    var newNote = document.createElement('DIV');
    //add the class of bulma column to each  note
    newNote.classList.add('column');
    newNote.appendChild(newNoteText);


    // console.log('You have created a new note with the text: ' + getNewNoteText); 
    //append the new note to the div
    document.querySelector('.columns').appendChild(newNote);
}