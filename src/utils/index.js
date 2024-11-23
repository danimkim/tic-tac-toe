import {
  INITIAL_GAMEBOARD,
  PLAYER_1_MARK,
  PLAYER_2_MARK,
  WINNING_COMBINATIONS,
} from '../constants';

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = PLAYER_1_MARK;

  if (gameTurns.length > 0 && gameTurns[0].player === PLAYER_1_MARK) {
    currentPlayer = PLAYER_2_MARK;
  }

  return currentPlayer;
};

const deriveWinner = (gameBoard, players) => {
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

  return winner;
};

const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAMEBOARD.map((arr) => [...arr])];

  for (const turn of gameTurns) {
    const {
      square: { row, col },
      player,
    } = turn;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

export { deriveActivePlayer, deriveWinner, deriveGameBoard };
