import { useState } from "react";
import "./Player.css";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => setIsEditing((prev) => !prev);

  let playername = <span className="player-name">{name}</span>;

  if (isEditing) {
    playername = <input placeholder="player name" />;
  }

  return (
    <li>
      {playername}
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
