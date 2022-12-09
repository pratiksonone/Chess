export const knightMoves = [
    [{ x: 2, y: -1 }], [{ x: 2, y: 1 }], [{ x: 1, y: -2 }], [{ x: 1, y: 2 }],
    [{ x: -2, y: -1 }], [{ x: -2, y: 1 }, { x: -1, y: -2 }, { x: -1, y: 2 }]
];
export const kingMoves = [
    [{ x: 0, y: 1 }], [{ x: 0, y: -1 }], [{ x: 1, y: 0 }], [{ x: -1, y: 0 }],
    [{ x: 1, y: 1 }], [{ x: -1, y: 1 }], [{ x: -1, y: -1 }], [{ x: 1, y: -1 }]
];
export const rookMoves = [
    [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
    { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }],
    [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 },
    { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }, { x: -8, y: 0 }],
    [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 },
    { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }, { x: 0, y: 8 }],
    [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 },
    { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }, { x: 0, y: -8 }]
];
export const bishopMoves = [
    [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 },
    { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }, { x: 8, y: 8 }],
    [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 },
    { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }, { x: 8, y: -8 }],
    [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 },
    { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }, { x: -8, y: -8 }],
    [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 },
    { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }, { x: -8, y: 8 }]
];
export const pawnNorth = [[{ x: 0, y: 1 }]];
export const pawnSouth = [[{ x: 0, y: -1 }]];
export const whitePawnDiagonalMoves = [[{ x: 1, y: 1 }], [{ x: -1, y: 1 }]];
export const blackPawnDiagonalMoves = [[{ x: -1, y: -1 }], [{ x: 1, y: -1 }]];
export const startingPlacePawnNorth = [[{ x: 0, y: 1 }, { x: 0, y: 2 }]];
export const startingPlacePawnSouth = [[{ x: 0, y: -1 }, { x: 0, y: -2 }]];

export const rowId = [8, 7, 6, 5, 4, 3, 2, 1];
export const colId = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const chessPiecesDefault = {
    "whiteKnightLeft": { "position": 15 },
    "whiteKnightRight": { "position": 55 },
    "blackKnightLeft": { "position": 8 },
    "blackKnightRight": { "position": 48 },
    "whiteRookLeft": { "position": 7 },
    "whiteRookRight": { "position": 63 },
    "blackRookLeft": { "position": 56 },
    "blackRookRight": { "position": 0 },
    "blackBishopLeft": { "position": 16 },
    "blackBishopRight": { "position": 40 },
    "whiteBishopLeft": { "position": 23 },
    "whiteBishopRight": { "position": 47 },
    "whiteQueen": { "position": 31 },
    "blackQueen": { "position": 24 },
    "whiteKing": { "position": 39 },
    "blackKing": { "position": 32 },
};