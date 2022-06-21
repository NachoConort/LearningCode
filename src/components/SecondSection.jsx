import React from 'react';
import Contador from './Contador';
// Podemos importar un hook llamado useState.
// Los hooks nos permiten desarrollar componentes funcionales con estado y ciclo de vida. Es decir, los hooks funcionan para enganchar en nuestro componente funcional, mas caracteristicas que provee react.
import { useState } from 'react';
import '../stylesheets/SecondSection.css';
import Boton from './Boton';

function SecondSection() {
  // Declaramos una constante que es un array. Primero le pasamos el valor que queremos usar como estado, y luego una funcion que nos permite actualizar este estado.
  // A estos valores les asignamos el valor retornado por useState, en este caso el valor inicial es 0.
  const [numClics, setNumClics] = useState(0)
  // Ahora en la funcion manejarClic utilizo la funcion setNumClics, que va a actualizar el valor numClics. Le va a sumar 1 cada vez que se haga clic.
  const manejarClic = () => {
    setNumClics(numClics + 1)
  };
  // En la funcion restartContador simplemente volvemos a setear el valor en 0 cada vez que se haga clic.
  const restartContador = () => {
    setNumClics(0)
  };
  return(
    // El contador recibe como prop el valor de numClics, el cual es actualizado por la funcion manejarClic.
    // El primer boton recibe la funcion manejarClic, mientras que el segundo la funcion restartClic.
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
