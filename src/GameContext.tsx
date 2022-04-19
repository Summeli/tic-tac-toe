import axios from "axios";
import React, { useContext, useState } from "react";
import { getNextMove } from "./ai";
import { gameMove, getNextTurn, getPossibleMoves, isWinning, P1, P2 } from "./GameUtil";

export type GameState = {
    board: string[][];
    turn: string; //P1 or P2
    round: number;
    winner: string;
    gameOver: boolean;
  };
  
type GameContext = {
    board: string[][];
    turn: string; //P1 or P2
    round: number;
    winner: string;
    gameOver: boolean;
    nextMove: (col: number, row: number, player: string) => void;
    resetGame: () => void;
  };

  // isable warning for redecalaration
// eslint-disable-next-line 
const GameContext = React.createContext<Partial<GameContext>>({});

export const useGameContext = () => useContext(GameContext);

type GameContextProps = {
    children: React.ReactNode;
};

export const GameContextProvider: React.FunctionComponent<GameContextProps> = ({
    children
  }) => {

    let grid : string [][] = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
    const [turn, setTurn] = useState(P1);
    const [board, setBoard] = useState(grid);
    const [round, setRound] = useState(0);
    const [winner, setWinner] = useState("");
    const [gameOver, setGameOver] = useState(false);

    const nextMove = (row: number, col: number, player: string) => {
        board[row][col] = player;
        setBoard(board);        
        if(isWinning(board,P1)){
          setWinner(P1);
          setGameOver(true);
        }else if( round < 8){
          setRound(round +1);
          setTurn(getNextTurn(turn));
        } else {
          //P2 wins with tie
          setWinner(P2);
          setGameOver(true);
        }
    };

    React.useEffect(() => {
      if(turn === P1 && !gameOver){
        let move: gameMove = getNextMove(board,getPossibleMoves(board), round);
        let body: string = JSON.stringify(board);
        axios.post('http://127.0.0.1:8787/api/nextmove', body)
          .then(response => {
           // const move = response.data;
            console.log(response.data);
            nextMove(move.row,move.col,P1);
          });


        //nextMove(move.row,move.col);
      }
    }, [turn,gameOver]);

    const resetGame = () => {
      setBoard(grid);
      setTurn(P1);
      setRound(0);
      setWinner("");
      setGameOver(false);
    };
  return (
    <GameContext.Provider
      value={{
        board,
        turn,
        round,
        winner,
        gameOver,
        nextMove,
        resetGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
  }