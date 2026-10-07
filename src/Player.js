import Card from "react-bootstrap/Card";

function Player({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://placehold.co/400x500?text=Player",
}) {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "15px",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        style={{
          height: "300px",
          objectFit: "cover",
        }}
      />

      <Card.Body
        style={{
          textAlign: "center",
          backgroundColor: "#f8f9fa",
        }}
      >
        <Card.Title
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          {name}
        </Card.Title>

        <Card.Text>
          <strong>Team:</strong> {team}
          <br />

          <strong>Nationality:</strong> {nationality}
          <br />

          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />

          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;