// Para crear una App de React, utilizamos el comando npx create-react-app nombre-app en la terminal.
// Para levantar un server virtual, utilizamos npm start en la terminal.
// Podemos instalar dependencias que queramos utilizar haciendo npm install en la terminal.
// Podemos eliminar algunos archivos de Test que son innecesarios.
// Los archivos index.js e index.html deben existir para que se compile el proyecto.
// Debemos importar React como hacemos abajo para utilizar esta biblioteca.
import React from 'react';
import ReactDOM from 'react-dom/client';
// Aqui importamos el index.css que le dara unos estilos a la pagina.
import './index.css';
// Aqui importamos el componente del archivo App.js.
import App from './App';
// Para mostrar lo que queramos en nuestra App, utilizaremos el div con id root, en el cual mostraremos todo.
// Obtenemos este div con document.getElementById.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Ejecutamos root.render, y dentro lo que queremos mostrar.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
