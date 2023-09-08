const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const { Circle, Square, Triangle } = require("./lib/shapes.js");
const generateSVG = require('./utils/generateSVG')

const questions = [


    //Added questions based on requirements
    {
        type: 'list',
        message: "Choose a license:",
        name: "license",
        choices:[
            "apache-2.0",
            "bsl-1.0",
            "bsd-2-clause",
            "bsd-3-clause",
            "cc0-1.0",
            "cc-by-4.0",
            "wtfpl",
            "epl-1.0",
            "agpl-3.0",
            "gpl-2.0",
            "gpl-3.0",
            "lgpl-3.0",
            "isc",
            "mit",
            "mpl-2.0",
            "unlicense",
            "zlib",
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