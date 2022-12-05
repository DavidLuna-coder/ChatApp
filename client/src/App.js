import logo from './logo.svg';
import './App.css';
import TextBox from './components/Textbox'

import { useEffect, useRef, useState } from 'react';
function App({ws}) {
  const [respuesta, setRespuesta] = useState([])

    ws.onmessage = (event) => {
      console.log(event.data)
      setRespuesta([...respuesta,event.data]);
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Chat App </h1>
        <TextBox ws={ws}/>
        <ul>
          {respuesta.map((msg,index) => <li key={index}>{msg}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
