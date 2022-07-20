const fs = require('fs');
const path = require('path');
const router = require("express").Router();
const dbPath = path.join(__dirname, "../../db/db.json")

var notesArray = [];

router.get("/notes", (req, res) => {
    res.sendFile(dbPath);
    // console.log(res);
});

router.post("/notes", (req, res) => {
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: JSON.stringify(notesArray.length)
    }
    notesArray.push(note)
    content = JSON.stringify(notesArray);

    fs.writeFile(dbPath, content, function (err) {
        if (err) throw err;
    });

    res.json(dbPath);
});

// delete note 

router.delete("/notes"), (req, res) => {
    content = JSON.stringify(notesArray);

    fs.writeFile(dbPath, content, function (err) {
        if (err) throw err;
    });

    res.json(dbPath);
}

 module.exports = router;