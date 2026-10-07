import PlayersList from "./PlayersList";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e9ecef",
        paddingTop: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#212529",
        }}
      >
        FIFA Player Cards
      </h1>

      <PlayersList />
    </div>
  );
}

export default App;