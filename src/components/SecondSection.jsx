import React from 'react';
import Contador from './Contador';
// Podemos importar un hook llamado useState.
import { useState } from 'react';
import '../stylesheets/SecondSection.css';
import Boton from './Boton';

function SecondSection() {
  const [numClics, setNumClics] = useState(0)
  const manejarClic = () => {
    setNumClics(numClics + 1)
  };
  const restartContador = () => {
    setNumClics(0)
  };
  return(
    <div className='second-section'>
      <div className='contenedor-contador'>
        <Contador 
        numClics={numClics} />
        <Boton 
        texto='Clic'
        esBotonClic={true}
        manejarClic={manejarClic} />
        <Boton 
        texto='Reiniciar'
        esBotonClic={false}
        manejarClic={restartContador} />
      </div>
    </div>
  )
};

export default SecondSection;
