import React, { useState } from 'react';
import GameButton from './GameButton';
import { P1, P2, useGameContext } from './GameContext';
import {isSpotOpen} from './GameUtil'

interface Props {
  setParty: (party: boolean) => void;
}

const GameBoard: React.FunctionComponent<Props> = (props) => {

  const {board, nextMove, winner, gameOver, resetGame} = useGameContext();
  
  if (!board || !nextMove || !resetGame) return null;

  if(winner && winner === P2){
    console.log("time to party");
    props.setParty(true);
  }
  const handleClick = (row: number, col: number) => {
    if(gameOver == true){
      props.setParty(false);
      resetGame();
    }
    nextMove(P1,row,col);
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

  </div>
);

}

export default GameBoard;
