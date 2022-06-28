import React from 'react';
import '../stylesheets/Testimonio.css';

function Testimonio (props) {
  return (
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

export default Testimonio;
