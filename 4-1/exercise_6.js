let chessPiece = "QUEEn";

let chessPieceLC = chessPiece.toLowerCase();

switch (chessPieceLC) {
    case "peon":
        console.log(chessPiece + " -> forward");
        break;
    case "bishop":
        console.log(chessPiece + " -> diagonals");
        break;
    case "tower":
        console.log(chessPiece + " -> straigth lines");
        break;
    case "horse":
        console.log(chessPiece + " -> L");
        break;
    case "king":
        console.log(chessPiece + " -> one block any direction");
        break;
    case "queen":
        console.log(chessPiece + " -> EVERYWHERE!!! by Gary Oldman");
        break;
    default:
        console.log("Error");
}