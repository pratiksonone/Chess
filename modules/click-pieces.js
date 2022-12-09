import { pieces } from "../chess-main.js";
import { possibleMoves } from "./possible-moves.js";
import { classContains, removeClass } from "./utils.js";

export class ClickPieces {
    boxes = document.querySelectorAll(".box");
    targetPiece = "";

    /**
    * This Method checks the conditions for the clicked piece elements i.e if the piece 
    * elements are present the click event is added to that elements and if we click on a 
    * perticular piece the "showPossibleMoves()" method is called and "pieceposition" i.e id 
    * and the event object of the clicked element is passed as an argument to that method.
    * If move is present, it adds click event on the move i.e green squares and if we click on 
    * that move the piece moves at that move square.
    * If the enemy is present then click event is added added to that element and the piece 
    * element which is present at that position is replaced with the previous clicked piece 
    * element and "showKilledPieces()" method is called.
    */
    addClickOnPieces() {
        this.boxes.forEach(function (item) {
            const piecePosition = item.id;

            item.addEventListener("click", function (e) {
                const clickedElement = e.target;
                const clickedElementSquare = e.currentTarget;
                if (classContains("highlight-enemy", clickedElementSquare)) {
                    const killedPiece = e.currentTarget.innerHTML;
                    e.currentTarget.innerHTML = pieces.targetPiece.innerHTML;
                    pieces.targetPiece.innerHTML = "";
                    pieces.setBackToDefault();
                    possibleMoves.showKilledPieces(killedPiece);
                    return;
                }
                if (classContains("highlight-move", clickedElement)) {
                    e.currentTarget.innerHTML = pieces.targetPiece.innerHTML;
                    pieces.targetPiece.innerHTML = "";
                    pieces.setBackToDefault();
                }
                if (classContains("active-white", clickedElement) || classContains("active-black", clickedElement)) {
                    possibleMoves.showPossibleMoves(piecePosition, e);
                    pieces.targetPiece = e.currentTarget;
                } else {
                    pieces.setBackToDefault();
                }
            });
        });
    }

    /**
     * This method removes highlight classes from all squares of chess board.
     */
    setBackToDefault() {
        pieces.boxes.forEach(function (item) {
            removeClass("highlight-move", item);
            removeClass("highlight-enemy", item);
        });
    }
}