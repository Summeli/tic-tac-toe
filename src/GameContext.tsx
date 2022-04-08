import React, { useContext, useState } from "react";
import { getNextMove } from "./ai";
import { checkForWinner, getNextTurn, getPossibleMoves } from "./GameUtil";

export type GameState = {
    board: string[][];
    turn: string; //P1 or P2
    round: number;
    winner: string;
    gameOver: boolean;
  };

export type gameMove = {
    row: number,
    col: number
};


type GameContext = {
    board: string[][];
    turn: string; //P1 or P2
    round: number;
    winner: string;
    gameOver: boolean;
    nextMove: (player: string, col: number, row: number) => void;
    resetGame: () => void;
  };
  

export const P1 = "X";
export const P2 = "O";


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

    const nextMove = (pplayer: string, row: number, col: number) => {
      console.log("next Move")
        board[row][col] = turn;
        setBoard(board);        
        if(checkForWinner(board) == 1){
          setWinner(turn);
          setGameOver(true);
        }
        if( round < 9){
          setRound(round +1);
          setTurn(getNextTurn(turn));
        } else {
          setWinner(P2);
          setGameOver(true);
        }
    };

    React.useEffect(() => {
      console.log("turn", turn);
      if(turn === P1 && !gameOver){
        let move: gameMove = getNextMove(board,getPossibleMoves(board), round);
        nextMove(P1,move.row,move.col);
      }
    }, [turn]);

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