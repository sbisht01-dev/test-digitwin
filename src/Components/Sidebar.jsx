function Sidebar({ onIncrement, counterValue }) {
  const itemStyle = {
    padding: "12px 20px",
    borderBottom: "1px solid #333",
    cursor: "pointer",
    backgroundColor: "#1e1e1e",
    color: "white"
  };

  return (
    <div style={{ width: "240px", backgroundColor: "#1e1e1e", height: "100vh" }}>
      <div style={{ padding: "20px", color: "white", fontWeight: "bold" }}>
        TFrenzy Dashboard
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* Our Increment Button */}
        <li style={itemStyle} onClick={onIncrement}>
          ➕ Increment Counter ({counterValue})
        </li>
        <li style={itemStyle}>🏭 Blast Furnace</li>
      </ul>
    </div>
  );
}
export default Sidebar;