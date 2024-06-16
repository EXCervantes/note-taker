const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (targetFile, noteData) =>
    fs.writeFile(targetFile, JSON.stringify(noteData, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${targetFile}`)
    );

const readThenAppend = (noteData, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(noteData);
            writeToFile(file, parsedData);
        }
    });
};

const removeNote = (noteData, file) => {
    JSON.parse(fs.readFileSync('db/db.json'))
    const deletedNote = noteData.
        fs.writeFileSync('db/db.json', JSON.stringify(deletedNote))
    res.json();
}

module.exports = { readFromFile, writeToFile, readThenAppend, removeNote };