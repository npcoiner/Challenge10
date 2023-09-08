const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const { Circle, Square, Triangle } = require("./lib/shapes.js");

const questions = [

];

function writeToFile(fileName, data) {
    const md = generateMarkdown(data);
    writeFile(fileName,md);
}