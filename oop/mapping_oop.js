// chess square
// Property -> 2 Colors (color == EEEED2 ? 0 : 1)(white => EEEED2 && black=> 769656 = 1)
// Property -> 2 isHighlighted (true or false)
// Property -> 2 isHint (true or false)
// Property -> 2 isPiece (true or false)
//
//
//
// Property -> 2 id (string)

const mainMap = [];

// each square
class Square {
    color; // only 2 colors
    isHighlighted; // heghlighted with yellow color or not 
    isHint; // small circle in middle square
    isPiece; // if exists a piece then we wil return location for image otherwise we wil return false
    id; // unique id to recognize the square
}

for (let i = 8; i > 0; i--) {
    const isRowEven = i % 2 == 0 ? true : false;
    const rowArray = [];
    for (let j = 97; j < 105; j++) {

        const isElementEven = j % 2 == 0 ? true : false;

        const fileName = String.fromCharCode(j);
        const id = fileName + i;

        // create object of squares
        const square = new Square();

        // set Properties
        square.id = id;

        // Color
        // odd row => odd event (769656)
        if(!isRowEven && !isElementEven) {
            square.color = 'dark';
        }
        // even row => odd event (EEEED2)
        if(isRowEven && !isElementEven) {
            square.color = 'light';
        }
        // odd row => even event 
        if(!isRowEven && isElementEven) {
            square.color = 'light';
        }
        // even row => even event (769656)
        if(isRowEven && isElementEven) {
            square.color = 'dark';
        }

        // push array
        rowArray.push(square);
    }
    mainMap.push(rowArray);
}

import * as silicon from './renderHtml.js';
silicon.renderUI(mainMap);