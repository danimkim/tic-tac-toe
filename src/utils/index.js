import { PLAYER_1_MARK, PLAYER_2_MARK } from '../constants';

export const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = PLAYER_1_MARK;

  if (gameTurns.length > 0 && gameTurns[0].player === PLAYER_1_MARK) {
    currentPlayer = PLAYER_2_MARK;
  }

  return currentPlayer;
};
