import React from 'react';
import '../stylesheets/Contador.css';
// Se puede desestructurar el objeto props y pasarle al componente directamente la propiedad que quiero usar.
// Esto se realiza con llaves{}.
function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  )
};

export default Contador;
