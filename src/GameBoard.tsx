import EndGameView from './EndGameView';
import GameButton from './GameButton';
import { P1, P2, useGameContext } from './GameContext';
import {isSpotOpen} from './GameUtil'


const GameBoard: React.FunctionComponent = () => {

  const {board, nextMove, gameOver, resetGame} = useGameContext();
  
  if (!board || !nextMove || !resetGame) return null;

  const handleClick = (row: number, col: number) => {
    if(gameOver !== true){
      nextMove(row,col);
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

      <div className="extrabuttoncontainer">
        <button onClick = {resetGame} className= "newGameButton">new Game</button>
      </div>

      <EndGameView />


  </div>
);

}

export default GameBoard;
