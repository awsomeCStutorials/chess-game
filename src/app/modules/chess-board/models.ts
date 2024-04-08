import { FENChar } from "src/app/chess-logic/models"

type SquareWithPiece = {
    piece: FENChar;
    x: number;
    y: number;
}

type SquareWithoutPiece = {
    piece: null;
}

export type SelectedSquare = SquareWithPiece | SquareWithoutPiece;

export const columns = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;