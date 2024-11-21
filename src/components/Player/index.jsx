import { useState } from 'react';
import './Player.css';

export default function Player({ defaultName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(defaultName);

  const toggleIsEditing = () => setIsEditing((prev) => !prev);
  const handleChange = (e) => setPlayerName(e.target.value);

  let editablePlayername = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayername = (
      <input
        className=""
        placeholder={defaultName}
        onChange={handleChange}
        value={playerName === defaultName ? '' : playerName}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleIsEditing();
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
      <button onClick={toggleIsEditing}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
