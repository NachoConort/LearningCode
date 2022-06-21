// Importamos el archivo App.css para darle estilo al contenido del componente App.
import './App.css';
// Importamos el componente Testimonio.
import Testimonio from './components/Testimonio';
// Este es un componente, lo sabemos porque el nombre de la funcion comienza con mayuscula.
// Conceptualmente, los componentes son como las funciones de JavaScript. 
function App() {
  return (
    // Dentro del div principal-container, usamos nuestro componente.
    <div className="App">
      <div className='principal-container'>
        <h1>Aprendiendo React</h1>
        <Testimonio />
      </div>
    </div>
  );
}
// Exportamos el componente, para luego importarlo en otro archivo y poder utilizarlo alli.
export default App;
