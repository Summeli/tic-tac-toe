import React, { useState, KeyboardEvent }  from 'react';
import { useGameContext } from './GameContext';

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
        <div className='name-form'>
        {gameStarted ? (
            <div className='pname'>Player: {name}</div>
        ):
           (<div className='pname'>
               <p>Enter Player name to start the game:</p>
              <input type='text' className='playerNameInput' name='pname' onChange={handleChange} onKeyDown={handleKeyboardEvent} value={name}/>
              <button className='nameOKButton' value="OK" onClick={add}>OK</button>
           </div>) 
        }
        </div>
  );

  
    
}

export default PlayerName;