

// get the new note once button is clicked
document.querySelector('.add-new-note').addEventListener('click', function(e){
    addNewNote();
});

function addNewNote(){
    //get the placeholder tekst into note
    var getText = document.querySelector('.textarea').value;
    //reset the text area
    document.querySelector('.textarea').value = '';

    if(getText.length != 0){
        //create the note
        var newNoteText = document.createTextNode(getText);
        var newNote = document.createElement('DIV');

        //add the class of bulma column to each  note
        newNote.classList.add("column", "box", "is-one-quarter", "newNote");
        newNote.appendChild(newNoteText);

        //create button to change background color and append it to the note. Need to think if I will use it.
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("modify note");
        btn.classList.add("button");
        btn.appendChild(t);

        //append the new note to the div
        document
            .querySelector("#note-item")
            .appendChild(newNote)
            .appendChild(btn);

    }
    else{
        alert('you did not put any note text. Please type into the text box.');
    }

}


//TODO 3. function deleteNote + button to delete it
//TODO 4. function modifyNote + button to modify it




//TODO 5. function pickNoteColor (pick from 4 colours)
//the color picker - pink
var pickColorPink = document.createElement("DIV");
pickColorPink.setAttribute("id", "pickPink");
pickColorPink.style.width = "24px";
pickColorPink.style.height = "24px";
pickColorPink.style.backgroundColor = "#8A4D76";

    // var pickColorYellow = document.createElement("DIV");
    // pickColorYellow.style.width = "24px";
    // pickColorYellow.style.height = "24px";
    // pickColorYellow.style.backgroundColor = "#ffdd57";

    // var pickColorPinkFirst = document.getElementById("pickPink");
    // var colorPicker = pickColorPinkFirst.parentNode;
    // colorPicker.insertBefore(pickColorYellow, pickColorPinkFirst);