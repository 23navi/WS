import { useEffect, useState } from "react";
import "./App.css";
import Widget from "./components/Widget";
import socket from "./socketConnection";

function App() {
  const [perfDataObj, setPerfDataObj] = useState({});

  useEffect(() => {
    // we are already connected to socket, we just have to create a listiner to get perfData
    socket.on("perfData", (data) => {
      console.log({ data });
      const deviceMacAddress = data.macA;
      setPerfDataObj((prevState) => ({
        ...prevState,
        [deviceMacAddress]: data,
      }));
    });
    return () => {
      socket.off("perfData");
    };
  }, []);

  return (
    <div className="App">
      <Widget />
    </div>
  );
}

export default App;
