import './App.css';
import React, { useState } from 'react';

function App() {
  const [numero, setNumero] = useState(0);

  function disminuirNumero() {
    const n = numero - 1;
    setNumero(n);
  }

  function aumentarNumero() {
    const n = numero + 1;
    setNumero(n);
  }

  return (
    <div className="App">
      <p>Contador: {numero}</p>
      <button onClick={disminuirNumero}>-</button>
      <button onClick={aumentarNumero}>+</button>
    </div>
  );
}

export default App;