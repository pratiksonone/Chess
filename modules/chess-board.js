import { rowId, colId, chessPiecesDefault } from "./constants.js";
import { getPieceHTML } from "./utils.js";

export class ChessBoard {
    chessBoard = document.getElementById("chessBoard");

    /**
     * This method creates a Chess Board Dynamically by creating div element's rows and columns 
     * and adding css color classes alternatively 
     */
    createChessBoard() {
        for (let i = 0; i < 8; i++) {
            const divRow = document.createElement("div");

            for (let j = 0; j < 8; j++) {
                const divCol = document.createElement("div");

                divCol.id = `${colId[i]}${rowId[j]}`;

                if ((i + j) % 2 == 0) {
                    divCol.setAttribute("class", "box white-boxes");
                    divRow.appendChild(divCol);
                } else {
                    divCol.setAttribute('class', 'box black-boxes');
                    divRow.appendChild(divCol);
                }
            }
            this.chessBoard.appendChild(divRow);
        }
    }

    /**
     * This method places all the chess pieces at its default position on Chess Board by adding 
     * sprite image css classes on its default index position element's innerHTML. 
     */
    placeDefaultPieces() {
        const boxes = document.querySelectorAll(".box");

        boxes[chessPiecesDefault["whiteKnightLeft"].position].innerHTML = getPieceHTML("active-white", "knight", "white-knight");
        boxes[chessPiecesDefault["whiteKnightRight"].position].innerHTML = getPieceHTML("active-white", "knight", "white-knight");;
        boxes[chessPiecesDefault["blackKnightLeft"].position].innerHTML = getPieceHTML("active-black", "knight", "black-knight");;
        boxes[chessPiecesDefault["blackKnightRight"].position].innerHTML = getPieceHTML("active-black", "knight", "black-knight");;
        boxes[chessPiecesDefault["whiteRookLeft"].position].innerHTML = getPieceHTML("active-white", "rook", "white-rook");;
        boxes[chessPiecesDefault["whiteRookRight"].position].innerHTML = getPieceHTML("active-white", "rook", "white-rook");;
        boxes[chessPiecesDefault["blackRookLeft"].position].innerHTML = getPieceHTML("active-black", "rook", "black-rook");;
        boxes[chessPiecesDefault["blackRookRight"].position].innerHTML = getPieceHTML("active-black", "rook", "black-rook");;
        boxes[chessPiecesDefault["blackBishopLeft"].position].innerHTML = getPieceHTML("active-black", "bishop", "black-bishop");;
        boxes[chessPiecesDefault["blackBishopRight"].position].innerHTML = getPieceHTML("active-black", "bishop", "black-bishop");;
        boxes[chessPiecesDefault["whiteBishopLeft"].position].innerHTML = getPieceHTML("active-white", "bishop", "white-bishop");;
        boxes[chessPiecesDefault["whiteBishopRight"].position].innerHTML = getPieceHTML("active-white", "bishop", "white-bishop");;
        boxes[chessPiecesDefault["whiteQueen"].position].innerHTML = getPieceHTML("active-white", "queen", "white-queen");;
        boxes[chessPiecesDefault["blackQueen"].position].innerHTML = getPieceHTML("active-black", "queen", "black-queen");;
        boxes[chessPiecesDefault["whiteKing"].position].innerHTML = getPieceHTML("active-white", "king", "white-king");;
        boxes[chessPiecesDefault["blackKing"].position].innerHTML = getPieceHTML("active-black", "king", "black-king");;

        boxes.forEach(function (item) {
            if (item.id.includes("7")) {
                item.innerHTML = getPieceHTML("active-black", "pawn", "black-pawn");
            }
            if (item.id.includes("2")) {
                item.innerHTML = getPieceHTML("active-white", "pawn", "white-pawn");
            }
        });
    }
}