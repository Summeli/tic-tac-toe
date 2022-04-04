import GameBoard from "./GameBoard";

const P1 = "X";
const P2 = "O";

  export function isSpotOpen(board: string[][],row: number, col: number ){
    return board[row][col] != P1 && board[row][col] != P2;
  }



