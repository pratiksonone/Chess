import { ClickPieces } from './click-pieces.js';
import { rowId, colId } from "./constants.js";
import { classContains, removeClass, addClass } from "./utils.js";
import { PieceMoves } from './piece-moves.js';

export class PossibleMoves {
    positionX = "";
    positionY = "";
    isRook = "";
    isKnight = "";
    isQueen = "";
    isKing = "";
    isBishop = "";
    isWhite = "";
    isBlack = "";
    isPawn = "";

    /**
     * This method takes the parameter 'id' and the 'event' object of the clicked element 
     * containing piece and finds the clicked piece is which type of piece then according to 
     * that call the function "getMoves" and passes name of a piece as an argument on which 
     * click event is fired.
     * 
     * @param {string} piecePosition - string containing id of clicked element
     * @param {object} e - event object of an element on which the event is occured 
     */
    showPossibleMoves(piecePosition, e) {
        const clickedElement = e.target;

        this.positionX = piecePosition.substring(0, 1).charCodeAt();
        this.positionY = parseInt(piecePosition.substring(1, 2));
        this.isWhite = classContains("active-white", clickedElement);
        this.isBlack = classContains("active-black", clickedElement);
        this.isRook = classContains("rook", clickedElement);
        this.isKnight = classContains("knight", clickedElement);
        this.isBishop = classContains("bishop", clickedElement);
        this.isKing = classContains("king", clickedElement);
        this.isQueen = classContains("queen", clickedElement);
        this.isPawn = classContains("pawn", clickedElement);

        ClickPieces.prototype.setBackToDefault();

        if (this.isKnight) {
            PieceMoves.prototype.getMoves("knight");
        } else if (this.isRook) {
            PieceMoves.prototype.getMoves("rook");
        } else if (this.isBishop) {
            PieceMoves.prototype.getMoves("bishop");
        } else if (this.isKing) {
            PieceMoves.prototype.getMoves("king");
        } else if (this.isQueen) {
            PieceMoves.prototype.getMoves("queen");
        } else if (this.isPawn) {
            PieceMoves.prototype.getMoves("pawn", e);
        }
    }

    /**
       * This method takes "directions" Parameter which is array of objects containg moves of 
       * pieces in all directions that a piece can move on x and y axis and from the current 
       * position of piece in x and y axis adding x and y values of moves to its charcode the 
       * Possible Moves of the piece are founded and then the moves which are in the chessboard 
       * are filtered out and checking the conditions the valid moves are highlighted by adding 
       * css classes,also it takes the "remove" parameter to check the conditions for piece pawn. 
       * 
       * @param {object} directions - Array of objects containing moves of pieces. 
       * @param {boolean} remove - bollean values for pawn moves to remove move or enemy.
       */
    showMoves(directions, remove) {
        let moveSquares = [];

        for (let moves of directions) {
            const row = String.fromCharCode(possibleMoves.positionX + moves.x);
            const column = possibleMoves.positionY + moves.y;

            if (colId.includes(row) && rowId.includes(column)) {
                moveSquares.push(document.querySelectorAll(`#${row}${column}`));

                moveSquares.some(function (item) {

                    if (item[0].hasChildNodes()) {
                        const childElement = item[0].firstChild;

                        if (possibleMoves.isWhite == classContains("active-white", childElement) || possibleMoves.isBlack == classContains("active-black", childElement)) {
                            removeClass("highlight-move", item[0]);
                            removeClass("highlight-enemy", item[0]);

                            if (possibleMoves.isRook || possibleMoves.isBishop || possibleMoves.isQueen || possibleMoves.isPawn) {
                                return item[0];
                            }

                        } else {
                            addClass("highlight-enemy", item[0]);
                            if (remove == true) { removeClass("highlight-enemy", item[0]); }
                            if (possibleMoves.isPawn) { return item[0]; }
                        }

                        if (possibleMoves.isRook || possibleMoves.isBishop || possibleMoves.isQueen || possibleMoves.isPawn) {
                            return classContains("highlight-enemy", item[0]);
                        }

                    } else {
                        if (remove != false) { addClass("highlight-move", item[0]); }
                    }
                });
            }
        }
    }

    /**
     * This method takes the parameter as a HTML string of killed piece and checks that a 
     * killed piece is black or white, then acoording to that it puts black killed pieces in 
     * black piece section and white killed pieces in white killed section's innerHTML.
     * 
     * @param {string} killedPiece - HTML String of killed piece element.
     */

    showKilledPieces(killedPiece) {
        const whitePieceSection = document.getElementById("whiteKilled");
        const blackPieceSection = document.getElementById("blackKilled");

        if (killedPiece.includes("active-black")) {
            blackPieceSection.innerHTML += `<div class="killed-pieces">${killedPiece}</div>`;
        }
        if (killedPiece.includes("active-white")) {
            whitePieceSection.innerHTML += `<div class="killed-pieces">${killedPiece}</div>`;
        }
    }
}
export const possibleMoves = new PossibleMoves();   