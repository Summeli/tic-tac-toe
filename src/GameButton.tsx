import React from 'react';
import { P1, P2 } from './GameContext';

interface Props {
    text: string;
    row: number;
    col: number;
    isOpen: boolean;
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const GameButton: React.FunctionComponent<Props> = (props) => {
  let open : boolean = props.isOpen;
  let buttonName = "gameButton";
  if(props.text === P1){
    buttonName = "gameButtonP1"
  }else if(props.text === P2){
    buttonName = "gameButtonP2";
  }
    return (
        <button className={buttonName} onClick = {open? (props.onClick): undefined}></button>
        );
    
  }

  export default GameButton;