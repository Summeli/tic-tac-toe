import GameBoard from "./GameBoard";
import { P1,P2 } from "./GameContext";
  export function isSpotOpen(board: string[][],row: number, col: number ): boolean{
    return board[row][col] != P1 && board[row][col] != P2;
  }



export function checkForWinner(board: string[][]) : number {
      /*checkign vertical line*/
      for( let col=0; col<3; col++){
          let row=0;
          if(board[row][col] == board[row+1][col] && board[row+1][col] == board[row+2][col]){
              return 1;
          }
      }
      /*checking horizontal line*/
      if(board[0][0] == board[0][1] && board[0][1] == board[0][2]){
          return 1;
      }
      else if(board[1][0] == board [1][1] && board[1][1] == board[1][2])
      {
          return 1;
      }
      else if(board[2][0] == board [2][1] && board[2][1] == board[2][2])
      {
          return 1;
      }
      else if(board[0][0] == board[1][1] && board[1][1] == board[2][2])/*diagonal*/
      {
          return 1;
      }
    
      return -1;
      
  }

export function getNextTurn(turn: string): string{
    if(turn === P1){
        return P2;
    }
    else{
        return P1;
    }
}