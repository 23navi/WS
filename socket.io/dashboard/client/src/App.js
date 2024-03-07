import { useEffect, useState } from "react";
import "./App.css";
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
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
