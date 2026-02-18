function ControlPanel({ currentSpeed, onUpdateSpeed }) {
  const cardStyle = {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    border: "1px solid #dee2e6"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  return (
    <div style={{ width: "300px", padding: "20px", backgroundColor: "white", borderLeft: "1px solid #ddd" }}>
      <h3>System Monitor</h3>
      <div style={cardStyle}>
        <p style={{ margin: 0, color: "#666" }}>Current Belt Speed</p>
        <h2 style={{ margin: "5px 0", color: "#007bff" }}>{currentSpeed} m/s</h2>
      </div>

      <h4>Manual Controls</h4>
      <button style={buttonStyle} onClick={() => onUpdateSpeed(currentSpeed + 1)}>Speed Up (+)</button>
      <button style={buttonStyle} onClick={() => onUpdateSpeed(currentSpeed - 1)}>Slow Down (-)</button>
      <button 
        style={{ ...buttonStyle, backgroundColor: "#dc3545", marginTop: "15px" }} 
        onClick={() => onUpdateSpeed(0)}
      >
        EMERGENCY STOP
      </button>
    </div>
  );
}

export default ControlPanel;