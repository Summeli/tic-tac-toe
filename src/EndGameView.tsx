import React  from 'react';
import { useGameContext } from './GameContext';
import { P1, P2 } from './GameUtil';

const EndGameView: React.FunctionComponent = () => {
    const {winner, gameOver} = useGameContext();

    let txt = "";
    if(winner && winner === P2 && gameOver === true){
        txt = "you won";
    }
    if(winner && winner === P1 && gameOver === true){
        txt = "Computer won";
    }

    return(
        <div className="winner">
         <p>{txt}</p>
    </div>
  );

  
    
}

export default EndGameView;