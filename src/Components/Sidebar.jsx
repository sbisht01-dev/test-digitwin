function Sidebar({ onIncrement, currentSpeed }) {
  return (
    <div style={{ width: "240px", background: "#1a1a1a", color: "white", padding: "20px" }}>
      <h2>TFrenzy Control</h2>
      <p>Current Speed: {currentSpeed}</p>
      <button 
        onClick={onIncrement}
        style={{ padding: "10px 20px", cursor: "pointer", width: "100%" }}
      >
        Increase Speed
      </button>
    </div>
  );
}

export default Sidebar;