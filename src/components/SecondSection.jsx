import React from 'react';
import Contador from './Contador';
import { useState } from 'react';
import '../stylesheets/SecondSection.css';

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
        texto= 'Clic' 
        numClics={numClics}
        esBotonClic= {true} />
      </div>
    </div>
  )
};

export default SecondSection;
