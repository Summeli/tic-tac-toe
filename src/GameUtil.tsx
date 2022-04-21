export const P1 = "X";
export const P2 = "O";

export type gameMove = {
    row: number,
    col: number
};

export function isSpotOpen(board: string[][],row: number, col: number ): boolean{
    return board[row][col] !== P1 && board[row][col] !== P2;
  }

  export function isWinning(board: string[][], player: string) : boolean {
    /*checkign vertical line*/
    for( let col=0; col<3; col++){
        let row=0;
        if(board[row][col] === player && board[row+1][col] === player && board[row+2][col] === player){
            return true;
        }
    }
    /*checking horizontal line*/
    if(board[0][0] === player && board[0][1] === player && board[0][2] === player){
        return true;
    }
    else if(board[1][0] === player && board[1][1] === player && board[1][2] === player)
    {
        return true;
    }
    else if(board[2][0] === player && board[2][1] === player && board[2][2] === player)
    {
        return true;
    }
    else if(board[0][0] === player && board[1][1] === player && board[2][2] === player)/*diagonal*/
    {
        return true;
    } else if(board[0][2] === player && board[1][1] === player && board[2][0] === player)/*diagonal*/
    {
        return true;
    }
  
    return false;

}

export function getNextTurn(turn: string): string{
    if(turn === P1){
        return P2;
    }
    else{
        return P1;
    }
}

 export function getPossibleMoves(board: string[][]): gameMove[] {
    let moves = new Array<gameMove>();
    for( let col=0; col<3; col++){
        for( let row=0; row<3; row++){
            if(board[row][col] !== P1 && board[row][col] !== P2){
                moves.push({row,col} as gameMove);
            }
        }
    }
    return moves;
 } 
 
 export function isMovesLeft(board: string[][]){
    let moves: gameMove[] = getPossibleMoves(board);
    if(moves.length > 0){
        return true;
    }else {
        return false;
    }
 }