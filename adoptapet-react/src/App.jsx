import React, { useState } from 'react';
import { mascotas } from './data/mascotas';
import { MascotaCard } from './components/MascotaCard';
import { FiltroEspecie } from './components/FiltroEspecie';
import './App.css';

function App() {
  const [filtro, setFiltro] = useState('todas');

  // Filtrar las mascotas según el filtro seleccionado
  const mascotasFiltradas = mascotas.filter((mascota) => {
    if (filtro === 'todas') return true;
    return mascota.especie.toLowerCase() === filtro;
  });

  return (
    <div className="app">
      <h1>Lista de Mascotas</h1>
      <FiltroEspecie filtroActual={filtro} setFiltro={setFiltro} />
      <div className="mascotas-container">
        {mascotasFiltradas.map((mascota) => (
          <MascotaCard key={mascota.id} mascota={mascota} />
        ))}
      </div>
    </div>
  );
}

export default App;