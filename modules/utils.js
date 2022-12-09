import { PossibleMoves } from "./possible-moves.js";

/**
 * This function takes class name and HTML element as a parameter and checks if the class name 
 * is present in the element classList and return boolean value true if classname is present 
 * else returns false.
 * 
 * @param {string} className - String containing class name   
 * @param {HTMLElement} element - HTML Element in which we want to check the class name is present or not
 * @returns {boolean} - returns boolean value, if classname is present then returns true else returns false
 */
export function classContains(className, element) {
    return element.classList.contains(className);
}

/**
 * This function takes class name and HTML element as a parameter and removes that classname 
 * from element classlist if present
 * 
 * @param {string} className - String containing class name.  
 * @param {HTMLElement} element - HTML Element from which we want to remove the class name.
 * @returns - removes class name from the element classList if class name is present.
 */
export function removeClass(className, element) {
    return element.classList.remove(className);
}

/**
 * This function takes class name and HTML element as a parameter and adds that classname to 
 * the element classlist
 * 
 * @param {string} className - String containing class name.  
 * @param {HTMLElement} element - HTML Element in which we want to add the class name.
 * @returns - Adds the className to the classlist of element.
 */
export function addClass(className, element) {
    return element.classList.add(className);
}

/**
 * this function takes an Array of Direction Arrays and boolean values to remove move or enemy 
 * for piece "pawn" and then passes arguments to "showMoves()" method as each direction Array 
 * and boolean values as it is.
 * 
 * @param {Array} possibleDirections - Piece moves Array of each direction Arrays in which pieces can move.
 * @param {boolean} remove - Boolean value to remove the move or enemy 
 */
export function getMovesfromDirections(possibleDirections, remove) {
    possibleDirections.forEach(function (direction) {
        PossibleMoves.prototype.showMoves(direction, remove);
    });
}

/**
 * This Function takes three string parameters containing class name and returns the particular 
 * piece element HTML string according to that class names.
 * 
 * @param {string} blackOrWhite -string containing class name which defines the piece is white or black and active.
 * @param {string} pieceName - string containing class name which defines the piece name.
 * @param {string} pieceImageClass - string containing class name which contains sprite image class for that piece. 
 * @returns - HTML string of chess piece element.
 */
export function getPieceHTML(blackOrWhite, pieceName, pieceImageClass) {
    return `<div class="pieces ${blackOrWhite} ${pieceName} ${pieceImageClass}"></div>`;
}