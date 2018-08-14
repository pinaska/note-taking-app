
function handleNote(){
    // get the new note once button is clicked
    document.querySelector('.add-new-note').addEventListener('click', function (e) {
        addNewNote();
    });

    function addNewNote() {
        //get the placeholder tekst into note
        var getText = document.querySelector('.textarea').value;
        //reset the text area
        document.querySelector('.textarea').value = '';

        if (getText.length != 0) {
            //create the note
            var newNoteText = document.createTextNode(getText);
            var newNote = document.createElement('DIV');

            //add the class of bulma column to each  note
            newNote.classList.add("column", "box", "is-one-quarter", "newNote");
            var newNotePar = document.createElement('P');
            newNotePar.classList.add("note-p");
            newNote.appendChild(newNotePar);
            newNotePar.appendChild(newNoteText);

            //create button to modify element with class "note-p"
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("modify note");
            btn.classList.add("button", "modify-note");
            btn.appendChild(t);

            //append the new note to the div
            var noteNode = document
                .querySelector("#note-item")
                .appendChild(newNote)
                .appendChild(btn);
            //add more html to the
            noteNode.insertAdjacentHTML("afterend", '<a class="delete deletebtn"></a><p>change the background</p><div class="color-picker"><div id="pickPink"class="color-btn"></div><div id="pickYellow" class="color-btn"></div><div id="pickGreen"class="color-btn"></div></div>');

        }
        else {
            alert('you did not put any note text. Please type into the text box.');
        }

    }

    //TODO 3. function deleteNote
    function deleteNote() {
        document.querySelector('.deletebtn').addEventListener('click', function (e) {
            console.log('it is clicked');
            noteNode.children[1].remove();
        })
    }
    deleteNote();

}
handleNote();







//TODO 4. function modifyNote + button to modify it



//TODO 3. function deleteNote




//TODO 5. function pickNoteColor (pick from 4 colours)
