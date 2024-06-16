const db = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readThenAppend, removeNote } = require('../helpers/fsUtils');


db.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => {
        res.json(JSON.parse(data));
    })
});

db.post('/', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    if (title && text) {
        const userNote = {
            title,
            text,
            id: uuidv4(),
        };

        readThenAppend(userNote, './db/db.json');

        const response = {
            status: 'Success',
            body: userNote,
        };

        res.json(response);
    } else {
        res.json({
            message: 'Note is invalid',
            id: userNote.id,
        });
    }
});

db.delete('/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    let deletedNote = db.filter(noteEntry => noteEntry.id !== req.params.id);
    writeToFile('db/db.json', JSON.stringify(deletedNote));
    res.json(deletedNote);
    res.send(`Removed note id ${req.params.id}`);
})

module.exports = db;
