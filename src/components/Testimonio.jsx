// Creamos una carpeta para los componentes dentro de la carpeta src.
// Dentro de esta carpeta creamos los componentes.
// Importamos React.
import React from 'react';

// Creamos nuestro componente
// Puedo pasar datos a un componente por medio de algo llamado props.
function Testimonio (props) {
  // Dentro del return estara lo que queremos mostrar.
  return (
    // Con className asignamos una clase.
    <div className='testimonio-container'> 
      <img 
        className='testimonio-img'
        src={require(`../img/${props.img}.png`)}/>
    </div>
  )
};
// Exportamos el componente.
export default Testimonio;
