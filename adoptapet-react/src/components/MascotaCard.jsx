import PropTypes from 'prop-types';
import React from 'react';
import './app.css'; // Asegúrate de importar el archivo de estilos

export const MascotaCard = ({ mascota }) => {
  // Función para determinar la clase según la especie
  const getClaseEspecie = (especie) => {
    switch (especie.toLowerCase()) {
      case 'perro':
        return 'mascota-perro';
      case 'gato':
        return 'mascota-gato';
      default:
        return 'mascota-otro';
    }
  };

  return (
    <div className={`mascota-card ${getClaseEspecie(mascota.especie)}`}>
      <h3>{mascota.nombre}</h3>
      <p>Raza: {mascota.raza}</p>
      <p>Edad: {mascota.edad} años</p>
      <p>Descripción: {mascota.descripcion}</p>
      <p>Características: {mascota.caracteristicas.join(', ')}</p>
      {mascota.adopcionUrgente && <strong>¡Adopción urgente!</strong>}
    </div>
  );
};

// Definición de PropTypes para validar las propiedades del objeto mascota
MascotaCard.propTypes = {
  mascota: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    raza: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    descripcion: PropTypes.string.isRequired,
    caracteristicas: PropTypes.arrayOf(PropTypes.string).isRequired,
    especie: PropTypes.string.isRequired,
    adopcionUrgente: PropTypes.bool,
  }).isRequired,
};