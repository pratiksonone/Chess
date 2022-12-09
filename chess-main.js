import { ClickPieces } from "./modules/click-pieces.js";
import { ChessBoard } from "./modules/chess-board.js";
export const chessBoard = new ChessBoard();
chessBoard.createChessBoard();
chessBoard.placeDefaultPieces();
export const pieces = new ClickPieces();
pieces.addClickOnPieces();