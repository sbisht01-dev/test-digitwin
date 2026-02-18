import { Unity } from "react-unity-webgl";
function UnityView({ unityProvider, isLoaded, progression }) {
  // Fix: Ensure progression is a number before calculating
  const loadingPercentage = Math.round((progression || 0) * 100);

  return (
    <div style={{ flex: 1, position: "relative", backgroundColor: "#000" }}>
      {!isLoaded && (
        <div style={{ 
          position: "absolute", top: "50%", left: "50%", 
          transform: "translate(-50%, -50%)", color: "white", textAlign: "center",
          zIndex: 10 // Ensure it stays on top
        }}>
          <p>Initializing 3D Engine...</p>
          <p>{loadingPercentage}%</p>
        </div>
      )}
      <Unity 
        unityProvider={unityProvider} 
        style={{ width: "100%", height: "100%", visibility: isLoaded ? "visible" : "hidden" }} 
      />
    </div>
  );
}

export default UnityView;