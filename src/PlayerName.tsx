import React, { useState, KeyboardEvent, KeyboardEventHandler }  from 'react';
import { useGameContext } from './GameContext';
import { P1, P2 } from './GameUtil';

const PlayerName: React.FunctionComponent = () => {

    const [name, setName] = useState("");
    const {startGame, turn} = useGameContext();

    let gameStarted: boolean = false;
    if(!startGame)
        return null;
    
    if(turn){
        gameStarted = true;
    }

    const handleKeyboardEvent = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            startGame(name);
        }   
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newValue = e.currentTarget.value;
        setName(newValue);
    };

    const add = (e: React.MouseEvent<HTMLButtonElement>) => {
        startGame(name);
    };

    return(
        <div className='form-wrapper'>
        {gameStarted ? (
            <div className='pname'>PlayerName: {name}</div>
        ):
           (<div className='pname'>
              <input type='text' name='pname' onChange={handleChange} onKeyDown={handleKeyboardEvent} value={name}/>
              <button value="OK" onClick={add}>OK</button>
           </div>) 
        }
        </div>
  );

  
    
}

export default PlayerName;