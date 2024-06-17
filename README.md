# Note Taker

## Table of Contents

- [Note Taker](#note-taker)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Screenshots of the Application](#screenshots-of-the-application)
  - [Credits](#credits)
  - [License](#license)

## Description

This project is a note taking application designed to take in a user's notes and store them. The app is powered by Express.js running in the backend. It uses the Node language manager with the packages File System (FS), Nodemon for debugging, and UUID for the unique ID's assigned to each note added to the list.

Working with creating GET, POST, and DELETE requests and routes allowed for more experience on the backend of applications. By using a VSCode extension Thunder Client it was possible to see the data being exchanged without the need to open the webpage itself. Using Nodemon made for quicker testing after debugging and saving the code files.

Some of the challenging issues encountered were during the implementing of the DELETE request where the `db.json` would clear the data after deleting a note entry. In the future this can be avoided by hosting the database on a server and using things such as [PostgreSQL](https://www.postgresql.org/) or other methods to handle posting and deleting data.

This application is deployed using [Render Dashboard](https://dashboard.render.com/).


## Technologies Used

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [Render Dashboard](https://dashboard.render.com/)
  
## Installation

Alternatively, a user can run this application natively by heading over to [Note Taker](https://github.com/EXCervantes/note-taker) and cloneing the repository. To learn how to clone a repository checkout this guide [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). You must have `node` installed on your system. Go [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) for instructions on how to do so. Then in the Terminal run `npm install` to install both the necessary dependencies. 
## Usage


If running this application natively, follow the instructions for natively running the application above. To initialize this application run `node index.js` in the Terminal. There click the [http://localhost:3000/](http://localhost:3000/) link to open the page in your browser.

A page will be displayed titled "Note Taker 📝". Click on the "Get Started" button then the user will be taken to a page with two columns. On the right a user can enter the title of a note with a description. Two buttons will be found above where a user can choose to save the note or clear the form if a mistake was entered. On the left column a list of notes entered as well as previous notes entered. The trash can icon will delete a note from the list. The notes will persist in the notes list until a user deletes the note even upon page reload.

### Screenshots of the Application

![Initial Page](images/notetakerscreenshot1.jpg)
![Added Note](images/notetakerscreenshot2.jpg)
![Deleted Note](images/notetakerscreenshot3.jpg)

## Credits

Referenced for giving each note a unique ID

"_javascript - NodeJS, crypto.randomUUID is not a function - Stack Overflow_. (2022, August 2). Stack Overflow. Retrieved June 14, 2024, from https://stackoverflow.com/questions/73205111/nodejs-crypto-randomuuid-is-not-a-function

Referenced for deleting a note entry

"_javascript - Express.js delete request - Stack Overflow_. (2020, April 30). Stack Overflow. Retrieved June 14, 2024, from https://stackoverflow.com/questions/61526572/express-js-delete-request

## License

This project is licensed under [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Please see the [License](https://opensource.org/licenses/MIT) page for more info.
