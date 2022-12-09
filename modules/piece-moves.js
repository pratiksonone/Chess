import { classContains, getMovesfromDirections } from "./utils.js";
import * as constants from "./constants.js";

export class PieceMoves {

    /**
    * This method takes the parameter "piece" as a string containing Name of the Piece and 
    * "event" object on which click event is fired and according to the name of the piece calls 
    * a function "getMovesfromDirections()" and passes the moves array as an argument to that 
    * function and in case of pawn boolean values are also passed as an argument to remove move 
    * or enemy.
    * 
    * @param {string} piece -string containing name of a piece.
    * @param {object} e - event object of an element on which click event is fired.
    */
    getMoves(piece, e) {
        if (piece == "rook" || piece == "queen") {
            getMovesfromDirections(constants.rookMoves);
        }
        if (piece == "bishop" || piece == "queen") {
            getMovesfromDirections(constants.bishopMoves);
        }
        if (piece == "king") {
            getMovesfromDirections(constants.kingMoves);
        }
        if (piece == "knight") {
            getMovesfromDirections(constants.knightMoves);
        }
        if (piece == "pawn") {
            if (classContains("black-pawn", e.target)) {
                getMovesfromDirections(constants.pawnSouth, true);
                getMovesfromDirections(constants.blackPawnDiagonalMoves, false);
            }
            if (classContains("white-pawn", e.target)) {
                getMovesfromDirections(constants.pawnNorth, true);
                getMovesfromDirections(constants.whitePawnDiagonalMoves, false);
            }
            if (e.currentTarget.id.includes("7") && classContains("active-black", e.target)) {
                getMovesfromDirections(constants.startingPlacePawnSouth, true);
            }
            if (e.currentTarget.id.includes("2") && classContains("active-white", e.target)) {
                getMovesfromDirections(constants.startingPlacePawnNorth, true);
            }
        }
    }
}