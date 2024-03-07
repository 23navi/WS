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

  const widgets = Object.keys(perfDataObj).map((key) => {
    return <Widget key={key} data={perfDataObj[key]} />;
  });

  return <div className="App">{widgets}</div>;
}

export default App;
