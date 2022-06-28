import React from 'react';
import '../stylesheets/Contador.css';
// Se puede desestructurar el objeto props y pasarle al componente directamente la propiedad que quiero usar.
function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  )
};

export default Contador;
