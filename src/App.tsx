import './App.css';
import GameBoard from './GameBoard';
import CloudamiteTop from './CloudamiteTop';
import CloudamiteFooter from './CloudamiteFooter';
import VictoryParty from './VictoryParty'
import { GameContextProvider } from './GameContext';
import PlayerName from './PlayerName';

const App = () => {

  return (
      <div className="tic-tac-toe">
         <GameContextProvider>
         <CloudamiteTop />
         <div className="gamecontainer">
            <PlayerName />
            <GameBoard />
         </div>
         <CloudamiteFooter />
        <VictoryParty />
        </GameContextProvider>
      </div>  );
}

export default App;
