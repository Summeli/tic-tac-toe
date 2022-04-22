import React, { useState, KeyboardEvent }  from 'react';
import { useGameContext } from './GameContext';

const PLAYER_NAME_MIN = 3;
const PLAYER_NAME_MAX = 30;

const PlayerName: React.FunctionComponent = () => {

    const [name, setName] = useState("");
    const [showError, setShowError] = useState(false);
    const {startGame, turn} = useGameContext();


    let gameStarted: boolean = false;
    if(!startGame)
        return null;
    
    if(turn){
        gameStarted = true;
    }

    const handleKeyboardEvent = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){ //try to stasrt the game
            if(name.length < PLAYER_NAME_MIN || name.length > PLAYER_NAME_MAX){
                setShowError(true);
            }else{
                startGame(name);
            }
        }   
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(showError && name.length >= PLAYER_NAME_MIN && name.length <= PLAYER_NAME_MAX){
            setShowError(false);
        }
        const newValue = e.currentTarget.value;
        setName(newValue);
    };

    const add = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(name.length < PLAYER_NAME_MIN || name.length >= PLAYER_NAME_MAX){
            setShowError(true);
        }else {
        startGame(name);
        }
    };

    return(
        <div className='name-form'>
        {gameStarted ? (
            <div className='pname'>Player: {name}</div>
        ):
           (<div className='pname'>
               <p>Enter Player name to start the game:</p>
               {showError? (<p>Player name must be between 3 and 30 characters</p>):(<p></p>)}
              <input type='text' className='playerNameInput' name='pname' onChange={handleChange} onKeyDown={handleKeyboardEvent} value={name}/>
              <button className='nameOKButton' value="OK" onClick={add}>OK</button>
           </div>) 
        }
        </div>
  );

  
    
}

export default PlayerName;