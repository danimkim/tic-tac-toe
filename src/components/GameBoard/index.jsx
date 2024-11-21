import { useState } from 'react';
import './GameBoard.css';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIdx, colIdx, playerSymbol) => {
    const updatedGameBoard = [...gameBoard.map((row) => [...row])];
    updatedGameBoard[rowIdx][colIdx] = playerSymbol;
    setGameBoard(updatedGameBoard);
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() =>
                    handleSelectSquare(rowIdx, colIdx, playerSymbol)
                  }
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
