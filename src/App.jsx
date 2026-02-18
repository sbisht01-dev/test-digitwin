import { useState } from "react";
import { useUnityContext } from "react-unity-webgl";
import Sidebar from "./Components/Sidebar";
import UnityView from "./Components/UnityView";
import ControlPanel from "./Components/ControlPanel";

function App() {

  const { unityProvider,sendMessage, isLoaded, progression } = useUnityContext({
    loaderUrl: "/Unity/Build/Unity.loader.js",
    dataUrl: "/Unity/Build/Unity.data",
    frameworkUrl: "/Unity/Build/Unity.framework.js",
    codeUrl: "/Unity/Build/Unity.wasm",
  });

  const [counter, setCounter] = useState(0);

  // ... useUnityContext setup

  function handleIncrement() {
    const nextValue = counter + 1;
    setCounter(nextValue);

    if (isLoaded) {
      // "StatusText" = Object Name in Unity
      // "UpdateValueDisplay" = Function Name in C#
      // nextValue = The data we are sending
      sendMessage("StatusText", "UpdateValueDisplay", nextValue);
    }
  }

 
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
     <Sidebar onIncrement={handleIncrement} counterValue={counter} />
      <UnityView unityProvider={unityProvider} isLoaded={isLoaded} progression={progression} />
      {/* <ControlPanel currentSpeed={speed} onUpdateSpeed={handleSpeedChange} /> */}
    </div>
  );
}

export default App;