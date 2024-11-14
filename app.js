const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");
const { title } = require("process");

//Customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },

  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
    },
  },
  handler: (argv) => {
    notes.readNotes(argv.title);
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "Listing your notes",
  handler: () => {
    notes.listNotes();
  },
});

yargs.parse();
