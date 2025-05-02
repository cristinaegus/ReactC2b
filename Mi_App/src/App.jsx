import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../src/estilos.css"; // Importa el archivo CSS para estilos globales
import { Title } from "./components/Title.jsx"; // Importa el componente Title
import React from "react"; // import { Title } from "./Title.jsx"; // Importa el componente Title

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="app-title">
        <Title />
        <h2>Una app para aprender React</h2>
        <p>Con esta app aprenderás a usar React desde cero</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
