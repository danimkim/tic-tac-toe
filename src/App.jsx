import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import { PLAYER_1_MARK, PLAYER_2_MARK } from './constants';
import Log from './components/Log';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState(PLAYER_1_MARK);

  const handleSelectSquare = (rowIdx, colIdx) => {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === PLAYER_1_MARK ? PLAYER_2_MARK : PLAYER_1_MARK
    );

    setGameTurns((prevTurns) => {
      let currentPlayer = PLAYER_1_MARK;

      if (prevTurns.length > 0 && prevTurns[0].player === PLAYER_1_MARK) {
        currentPlayer = PLAYER_2_MARK;
      }

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
