import { useMemo, useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import {
  initialGameBoard,
  PLAYER_1_MARK,
  PLAYER_2_MARK,
  WINNING_COMBINATIONS,
} from './constants';
import Log from './components/Log';
import { deriveActivePlayer } from './utils';
import GameOver from './components/GameOver';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    [PLAYER_1_MARK]: 'Player1',
    [PLAYER_2_MARK]: 'Player2',
  });

  const activePlayer = useMemo(
    () => deriveActivePlayer(gameTurns),
    [gameTurns]
  );

  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];

  for (const turn of gameTurns) {
    const {
      square: { row, col },
      player,
    } = turn;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secontSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secontSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

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

  const handleRestart = () => setGameTurns([]);

  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName={'Player1'}
            symbol={PLAYER_1_MARK}
            isActive={activePlayer === PLAYER_1_MARK}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            defaultName="Player2"
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
