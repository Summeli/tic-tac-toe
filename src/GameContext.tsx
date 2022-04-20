import axios from "axios";
import React, { useContext, useState } from "react";
import { getNextTurn, isWinning, P1, P2 } from "./GameUtil";

export type GameState = {
    playerName: string;
    board: string[][];
    turn: string; //P1 or P2
    round: number;
    winner: string;
    gameOver: boolean;
  };
  
type GameContext = {
    playerName: string;
    board: string[][];
    turn: string; //P1 or P2
    round: number;
    winner: string;
    gameOver: boolean;
    nextMove: (col: number, row: number, player: string) => void;
    resetGame: () => void;
    startGame: (playerName: string) => void;
  };

type NextMoveRequest = {
  playerName: string;
  type: string;
  board: string [][];
};

//const URL = "http://127.0.0.1:8787/api/nextmove"
const URL = "https://tic-tac-toe-ai.cloudamite.workers.dev/api/nextmove"
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

    let grid_gameover : string [][] = [['X', 'X', 'O'], ['X', 'X', 'X'], ['X', 'X', 'X']];
    let grid : string [][] = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
    const [playerName, setPlayerName] = useState("");
    const [turn, setTurn] = useState("");
    const [board, setBoard] = useState(grid_gameover);
    const [round, setRound] = useState(0);
    const [winner, setWinner] = useState("");
    const [gameOver, setGameOver] = useState(false);

    const startGame = (playerName: string) => {
      console.log("starting game", playerName);
      setPlayerName(playerName);
      resetGame();
    };

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
          let request : NextMoveRequest = {playerName: playerName, type: "human",board: board};
          let body: string = JSON.stringify(request);
          axios.post(URL, body)
          .then(response => {
             setWinner(P2);
            setGameOver(true);
          });
        }
    };

    React.useEffect(() => {
      if(turn === P1 && !gameOver){
        let request : NextMoveRequest = {playerName: playerName, type: "human", board: board};
        let body: string = JSON.stringify(request);
        axios.post(URL, body)
          .then(response => {
            
            const move = response.data;
            nextMove(move.row,move.col,P1);
          });
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
        resetGame,
        startGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
  }