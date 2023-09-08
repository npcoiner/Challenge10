const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const { Circle, Square, Triangle } = require("./lib/shapes.js");
const generateSVG = require('./utils/generateSVG')

const questions = [
    //Added questions based on requirements
    {
        type: 'list',
        message: "Choose a shape:",
        name: "shape",
        choices:[
            "triangle",
            "circle",
            "square",
        ],
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type: 'list',
        message: "Choose a color for the shape:",
        name: "shapeColor",
        choices:[
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "purple",
            "brown",
            "white",
            "black",
        ],
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type: 'input',
        message: "Type up to 3 letters:",
        name: "text",
        validate: (input) => {
            return (input.length < 4) ? true : (console.log(this.message), false)
        }
    },
    {
        type: 'list',
        message: "Choose a color for the text:",
        name: "textColor",
        choices:[
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "purple",
            "brown",
            "white",
            "black",
        ],
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    
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

//call init
init();