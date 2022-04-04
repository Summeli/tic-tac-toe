import React from 'react';

interface Props {
    text: string;
    row: number;
    col: number;
    isOpen: boolean;
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const GameButton: React.FunctionComponent<Props> = (props) => {
  let open : boolean = props.isOpen;
    return (
        <button className="gameButton" onClick = {open? (props.onClick): undefined}>{props.text}</button>
        
        );
    
  }

  export default GameButton;