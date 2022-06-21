import React from 'react';
import '../stylesheets/Boton.css';

function Boton({ texto, esBotonClic, manejarClic }) {
  return(
    // Para la clase del boton utilizamos un operador ternario. Si la propiedad es true se le asignara la clase boton-clic, sila propiedad es false se le asignara la clase boton-reiniciar.
    // Al boton le asignamos un event listener, el cual hace que se ejecute una funcion cada vez que clickeo.
    // Este recibe la propiedad manejarClic, a la cual le asignamos la funcion a ejecutar en el componente SecondSection.
    <button className={esBotonClic ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
      {texto}
    </button>
  )
};

export default Boton;
