const fs = require('fs');
const path = require('path');
const router = require("express").Router();
const dbPath = path.join(__dirname, "../../db/db.json")

var notesArray = [];

router.get("/notes", (req, res) => {
    res.sendFile(dbPath);
});

router.post("/notes", (req, res) => {

    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: JSON.stringify(notesArray.length)
    };

    notesArray.push(newNote);
    content = JSON.stringify(notesArray);

    fs.writeFile(dbPath, content, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.json(dbPath);

});


// delete note 

router.delete("/notes/:id", (req,res) => {
    let deleteNote = req.params.id;
    let noteIndex = notesArray.findIndex(notes => notes.id === deleteNote);

    notesArray.splice(noteIndex, 1);

    content = JSON.stringify(notesArray);

    fs.writeFile(dbPath, content, function (err) {
        if (err) throw err;
        console.log("Note has been deleted!")
    });

    res.json(dbPath);
});

 module.exports = router;

