const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.inverse.green("New note added!"));
  } else {
    console.log(chalk.inverse.red("Note title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.inverse.green("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.inverse.red("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse.blue("Your notes: "));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const searchedNote = notes.find((note) => note.title === title);

  if (searchedNote) {
    console.log(chalk.inverse.bold(searchedNote.title));
    console.log(searchedNote.body);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
