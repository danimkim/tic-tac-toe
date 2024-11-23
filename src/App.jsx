import { useCallback, useMemo, useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import { PLAYER_1_MARK, PLAYER_2_MARK, PLAYERS } from './constants';
import Log from './components/Log';
import { deriveActivePlayer, deriveGameBoard, deriveWinner } from './utils';
import GameOver from './components/GameOver';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = useMemo(
    () => deriveActivePlayer(gameTurns),
    [gameTurns]
  );
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = useMemo(
    () => gameTurns.length === 9 && !winner,
    [gameTurns, winner]
  );

  const handlePlayerNameChange = (symbol, name) =>
    setPlayers((prev) => ({ ...prev, [symbol]: name }));

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

  const handleRestart = useCallback(() => setGameTurns([]), []);

  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName={PLAYERS.PLAYER_1_NAME}
            symbol={PLAYER_1_MARK}
            isActive={activePlayer === PLAYER_1_MARK}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            defaultName={PLAYERS.PLAYER_2_NAME}
            symbol={PLAYER_2_MARK}
            isActive={activePlayer === PLAYER_2_MARK}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
