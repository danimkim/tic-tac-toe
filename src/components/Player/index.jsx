import { useState } from 'react';
import './Player.css';

export default function Player({
  defaultName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(defaultName);

  const handlePlayerNameChange = () => {
    setIsEditing((prev) => !prev);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  const handleInputChange = (e) => setPlayerName(e.target.value.toUpperCase());

  let editablePlayername = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayername = (
      <input
        className=""
        placeholder={defaultName}
        onChange={handleInputChange}
        value={playerName === defaultName ? '' : playerName}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handlePlayerNameChange();
          }
        }}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handlePlayerNameChange}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
