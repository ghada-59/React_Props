import Player from "./Player";
import players from "./players";

function PlayersList() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "30px",
      }}
    >
      {players.map((player) => (
        <Player
          key={`${player.name}-${player.jerseyNumber}`}
          {...player}
        />
      ))}
    </div>
  );
}

export default PlayersList;