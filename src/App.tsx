import './App.css';
import GameBoard from './GameBoard';
import CloudamiteTop from './CloudamiteTop';
import CloudamiteFooter from './CloudamiteFooter';
import VictoryParty from './VictoryParty'
import { GameContextProvider } from './GameContext';

const App = () => {

  return (
      <div className="kirosanabingo">
         <GameContextProvider>
         <CloudamiteTop />
         <div className="gamecontainer">
            <GameBoard />
         </div>
         <CloudamiteFooter />
        <VictoryParty />
        </GameContextProvider>
      </div>  );
}

export default App;
