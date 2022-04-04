import React, { useState } from 'react';
import GameButton from './GameButton';
import {isSpotOpen} from './GameUtil'

interface Props {
  setParty: (party: boolean) => void;
}

const GameBoard: React.FunctionComponent<Props> = (props) => {


  let grid : string [][] = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

  const [gamestate, setGameState] = useState(grid);

  const handleClick = (row: number, col: number) => {

  };

  const renderGameButton = (row: number, col: number) => {
    let tx : string = gamestate[row][col];
    let open: boolean = isSpotOpen(gamestate, row, col);
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

  </div>
);

}

export default GameBoard;
