import { useState } from "react";

export default function Player({
  symbol,
  initialName,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState();

  function handleEditClick() {
    //setIsEditing(!isEditing) because of state update scheduling
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing ? (
          <i class="fa-regular fa-floppy-disk"></i>
        ) : (
          <i class="fa-regular fa-pen-to-square"></i>
        )}
      </button>
    </li>
  );
}
