import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { mascotas } from './data/mascotas'; // Importa el array

function App() {
  const [count, setCount] = useState(0);

  // Verifica que el array se carga correctamente
  console.log('Mascotas:', mascotas);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <h2>Lista de Mascotas</h2>
        <ul>
          {mascotas.map((mascota) => (
            <li key={mascota.id}>
              {mascota.nombre} - {mascota.especie}
            </li>
          ))}
        </ul>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;