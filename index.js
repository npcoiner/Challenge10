const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const { Circle, Square, Triangle } = require("./lib/shapes.js");
const generateSVG = require('./utils/generateSVG')

const questions = [

];

function generateSVG(){

}
//TODO: this needs to follow SVG requirements
function writeToFile(fileName, data) {
    const md = generateSVG(data);
    writeFile(fileName,md);
}

//initializes the app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {writeToFile(`newREADME.md`,answers)})
    .then(() => console.log('done'))

};

init();