import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = () =>
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === 'X' ? 'O' : 'X'
    );
  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName="Player1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            defaultName="Player2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
