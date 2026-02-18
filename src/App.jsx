
import { useState, useEffect } from "react";
// Assuming you are using react-unity-webgl
import { useUnityContext } from "react-unity-webgl";
import Sidebar from "./Components/Sidebar";
import UnityView from "./Components/UnityView";
import { Unity } from "react-unity-webgl";
function App() {
  const [speed, setSpeed] = useState(0);
  const { unityProvider,sendMessage, isLoaded, progression } = useUnityContext({
    loaderUrl: "/Unity/Build/Unity.loader.js",
    dataUrl: "/Unity/Build/Unity.data",
    frameworkUrl: "/Unity/Build/Unity.framework.js",
    codeUrl: "/Unity/Build/Unity.wasm",
  });


  // Function to handle the click from the sidebar
  function handleIncrement() {
    const newSpeed = speed + 1;
    setSpeed(newSpeed);

    if (isLoaded) {
      // Syntax: sendMessage("ObjectName", "MethodName", Value);
      sendMessage("StatusText", "UpdateValueDisplay", newSpeed);
    }
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Pass the function to your Sidebar */}
      <Sidebar onIncrement={handleIncrement} currentSpeed={speed} />
      
      <div style={{ flex: 1 }}>
        <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

export default App;