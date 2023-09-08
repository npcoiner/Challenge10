const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const { Circle, Square, Triangle } = require("./lib/shapes.js");

const questions = [

];
//TODO: this needs to follow SVG requirements
function writeToFile(fileName, data) {
    const md = generateMarkdown(data);
    writeFile(fileName,md);
}