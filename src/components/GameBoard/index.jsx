import { useState } from 'react';
import './GameBoard.css';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIdx, colIdx) => {
    setGameBoard((prev) => {
      const updatedGameBoard = [...prev.map((row) => [...row])];
      updatedGameBoard[rowIdx][colIdx] = activePlayerSymbol;
      return updatedGameBoard;
    });

    onSelectSquare();
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => {
                    if (!playerSymbol) {
                      handleSelectSquare(rowIdx, colIdx);
                    }
                  }}
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
