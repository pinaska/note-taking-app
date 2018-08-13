

// get the new note once button is clicked
document.querySelector('.add-new-note').addEventListener('click', function(e){
    addNewNote();
});

//TODO: 1. check if textarea.lenght !=0; 2. add keyup for create new note 
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

//TODO 3. function deleteNote + button to delete it
//TODO 4. function modifyNote + button to modify it
//TODO 5. function pickNoteColor (pick from 4 colours)