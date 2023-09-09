const { Square, Circle, Triangle } = require("../Shapes.js");


function generateSVG(data) {
    console.log(data);


    //Example given:

    /*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <circle cx="150" cy="100" r="80" fill="green"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

    </svg>*/
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">`;

    //create the shape
    if(data.shape === "square"){
        var shape = new Square();
    }
    if(data.shape === "circle"){
        var shape = new Circle();
    }
    if(data.shape === "triangle"){
        var shape = new Triangle();
    }
    shape.setColor(data.shapeColor);

    //"render" it to svg output
    svg += shape.render();

    //Add text. Formatting from example
    svg += `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>`;
    svg += `</svg>`;

    return svg;
};

module.exports = generateSVG;