const fs = require("fs");

const dataJSON = fs.readFileSync("1-json.json");
const dataParse = JSON.parse(dataJSON);

dataParse.name = "Vlad";
dataParse.age = 28;

const dataStringify = JSON.stringify(dataParse);
fs.writeFileSync("1-json.json", dataStringify);
