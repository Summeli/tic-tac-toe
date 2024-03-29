import EndGameView from './EndGameView';
import GameButton from './GameButton';
import { useGameContext } from './GameContext';
import {isSpotOpen, P2} from './GameUtil'


const GameBoard: React.FunctionComponent = () => {

  const {board,turn, nextMove, gameOver, resetGame} = useGameContext();
  let gameStarted: boolean = false; 
  if (!board || !nextMove || !resetGame) return null;
 
  if(turn){
    gameStarted = true;
}
  const handleClick = (row: number, col: number) => {
    if(gameOver !== true){
      nextMove(row,col,P2);
    }
  };

  const renderGameButton = (row: number, col: number) => {
    let tx : string = board[row][col];
    let open: boolean = isSpotOpen(board, row, col);
      return (
          <GameButton
            text={tx} isOpen={open} 
            row = {row} col={col}
            onClick = {() => handleClick(row,col)}
          />
        );
  };


  return(
      <div className="gameboard">
        <div className="board-row">
          {renderGameButton(0,0)}
          {renderGameButton(0,1)}
          {renderGameButton(0,2)}
        </div>
      <div className="board-row">
        {renderGameButton(1,0)}
        {renderGameButton(1,1)}
        {renderGameButton(1,2)}
      </div>
      <div className="board-row">
        {renderGameButton(2,0)}
        {renderGameButton(2,1)}
        {renderGameButton(2,2)}
      </div>
      {
       gameStarted ? 
      (<div className="extrabuttoncontainer">
        <button onClick = {resetGame} className= "newGameButton">new Game</button>
      </div>) :
      <div></div>
      }
      <EndGameView />


  </div>
);

}

export default GameBoard;
