import React from 'react';
import PropTypes from 'prop-types';

export const FiltroEspecie = ({ filtroActual, setFiltro }) => {
  return (
    <div className="filtro-especie">
      <h3>Filtrar por especie</h3>
      <div className="botones-filtro">
        <button
          className={filtroActual === 'todas' ? 'activo' : ''}
          onClick={() => setFiltro('todas')}
        >
          Todas
        </button>
        <button
          className={filtroActual === 'perros' ? 'activo' : ''}
          onClick={() => setFiltro('perros')}
        >
          Perros
        </button>
        <button
          className={filtroActual === 'gatos' ? 'activo' : ''}
          onClick={() => setFiltro('gatos')}
        >
          Gatos
        </button>
      </div>
      <div className="selector-filtro">
        <label htmlFor="selector-especie">Seleccionar especie:</label>
        <select
          id="selector-especie"
          value={filtroActual}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="perros">Perros</option>
          <option value="gatos">Gatos</option>
        </select>
      </div>
    </div>
  );
};

FiltroEspecie.propTypes = {
  filtroActual: PropTypes.string.isRequired,
  setFiltro: PropTypes.func.isRequired,
};