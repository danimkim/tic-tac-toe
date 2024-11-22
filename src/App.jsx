import { useCallback, useMemo, useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import { PLAYER_1_MARK, PLAYER_2_MARK } from './constants';
import Log from './components/Log';
import { deriveActivePlayer } from './utils';

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = useMemo(
    () => deriveActivePlayer(gameTurns),
    [gameTurns]
  );

  const handleSelectSquare = (rowIdx, colIdx) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };
  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName="Player1"
            symbol={PLAYER_1_MARK}
            isActive={activePlayer === PLAYER_1_MARK}
          />
          <Player
            defaultName="Player2"
            symbol={PLAYER_2_MARK}
            isActive={activePlayer === PLAYER_2_MARK}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
