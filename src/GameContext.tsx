import React, { useContext, useState } from "react";

export type GameState = {
    board: string[][];
    turn: string; //P1 or P2
    round: number;
  };

  type GameContext = {
    board: string[][];
    turn: string; //P1 or P2
    round: number;
    nextMove: (player: string, col: number, row: number) => void;
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

    const nextMove = (pplayer: string, col: number, row: number) => {
        //set board
    };

  return (
    <GameContext.Provider
      value={{
        board,
        turn,
        round,
        nextMove
      }}
    >
      {children}
    </GameContext.Provider>
  );
  }