// this file contains all function that we can export

export function addPiecesToObject(obj) {
    const rank = obj.id[1];
    
    // black pawn
    if (rank == 7) {
        obj.isPiece = "../images/pieces/black/pawn.png";
    } 

    // black bishop
    if (obj.id == "c8" || obj.id == "f8") {
        obj.isPiece = "../images/pieces/black/bishop.png";
    } 

    // black knight
    if (obj.id == "b8" || obj.id == "g8") {
        obj.isPiece = "../images/pieces/black/knight.png";
    } 

    // black queen
    if (obj.id == "d8") {
        obj.isPiece = "../images/pieces/black/queen.png";
    } 

    // black king
    if (obj.id == "e8") {
        obj.isPiece = "../images/pieces/black/king.png";
    } 

    // black rook
    if (obj.id == "h8" || obj.id == "a8") {
        obj.isPiece = "../images/pieces/black/rook.png";
    } 

    // white rook
    if (obj.id == "a1" || obj.id == "a1") {
        obj.isPiece = "../images/pieces/white/rook.png";
    } 

    // white knight
    if (obj.id == "b1" || obj.id == "g1") {
        obj.isPiece = "../images/pieces/white/knight.png";
    } 

    // white bishop
    if (obj.id == "c1" || obj.id == "f1") {
        obj.isPiece = "../images/pieces/white/bishop.png";
    } 

    // white pawn
    if (rank == 2) {
        obj.isPiece = "../images/pieces/white/pawn.png";
    } 

    // white queen
    if (obj.id == "d1") {
        obj.isPiece = "../images/pieces/white/queen.png";
    } 

    // white king
    if (obj.id == "e1") {
        obj.isPiece = "../images/pieces/white/king.png";
    } 
}
