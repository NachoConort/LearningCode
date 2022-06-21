// Creamos una carpeta para los componentes dentro de la carpeta src.
// Dentro de esta carpeta creamos los componentes.
// Importamos React.
import React from 'react';
// Importamos los estilos
import '../stylesheets/Testimonio.css';
// Creamos nuestro componente
// Puedo pasar datos a un componente por medio de algo llamado props.
function Testimonio (props) {
  // Dentro del return estara lo que queremos mostrar.
  return (
    // Con className asignamos una clase.
    // Para utilizar codigo JavaScript, debemos utilizar llaves {}
    // Dentro de las llaves pasamos los props.
    // Para utilizar una imagen necesitaremos require, o podemos importarla con import.
    <div className='testimonio-container'> 
      <img 
        className='testimonio-img'
        src={require(`../img/${props.img}.png`)}/>
        <div className='text-container'>
        <p className='name-testimonio'> 
          <strong>{props.name}</strong> en {props.country} </p>
        <p className='charge-testimonio'> {props.charge} en <strong>{props.company}</strong> </p>
        <p className='text-testimonio'> "{props.testimonio}" </p>
      </div>
    </div>
  )
};
// Exportamos el componente.
export default Testimonio;
