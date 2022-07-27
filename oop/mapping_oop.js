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
class Square {
    color;
    isHighlighted;
    isHint;
    isPiece;
    id;
}

for (let i = 8; i > 0; i--) {
    const rowArray = [];
    for (let j = 97; j < 105; j++) {
        const fileName = String.fromCharCode(j);
        const id = fileName + i;

        // create object of squares
        const square = new Square();

        // set Properties
        square.id = id;

        // Color
        // odd row => odd event (769656)
        // even row => odd event (EEEED2)
        // odd row => even event 
        // even row => odd event (EEEED2)
        // even row => even event (769656)


        // push array
        rowArray.push(square);
    }
    mainMap.push(rowArray);
}

console.log(mainMap);