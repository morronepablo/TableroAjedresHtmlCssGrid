'use strict';

import { addPawnPieceToObject } from './export_functions.js';

// Create a function that renders html using array that we provide
const renderUI = function(squares) {
    
    // select mainContainer from my markup
    const mainContainer = document.querySelector('.main-container');
    // console.log(mainContainer);

    let rankNumber = 8;
    // Create square of size 70 x 70
    squares.forEach(element => {
        let rank = document.createElement("div");
        rank.classList.add('rank-style');
        rank.setAttribute("id", rankNumber--);
        
        //---------------
        element.forEach((el) => {
            el.isPiece = addPawnPieceToObject(el);
            // console.log(el);
            
            // creating htlm element with javascript
            const square = document.createElement("div");
            square.classList.add(`color-${el.color}`);
            square.classList.add('square-common');
            // assign unique id to each square
            square.setAttribute("id", el.id);
            // add file class to each square
            square.classList.add("file-"+el.id[0]);

            const imgElement = document.createElement("img");
            if(el.isPiece) {
                imgElement.setAttribute("src", el.isPiece);
            }
            square.appendChild(imgElement);
            
            rank.appendChild(square)
        });
        mainContainer.appendChild(rank);
    });
};

export { renderUI };