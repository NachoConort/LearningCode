// Importamos el archivo App.css para darle estilo al contenido del componente App.
import './App.css';
// Importamos el componente Testimonio.
import Testimonio from './components/Testimonio';
// Este es un componente, lo sabemos porque el nombre de la funcion comienza con mayuscula.
// Conceptualmente, los componentes son como las funciones de JavaScript. 
function App() {
  return (
    // Dentro del div principal-container, usamos nuestro componente.
    // Podemos usarlo cuantas veces queramos, cambiando los props para diferenciarlos.
    <div className="App">
      <div className='principal-container'>
        <h1>Aprendiendo React</h1>
        <Testimonio 
          img='EmmaTest'
          name='Emma Bostian'
          country='Suecia'
          charge='Ingeniera de Software'
          company='Spotify'
          testimonio='Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'/>
        <Testimonio
          img='ShawnTest'
          name='Shawn Wang'
          country='Singapore'
          charge='Software Engineer'
          company='Amazon'
          testimonio='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life' />  
        <Testimonio 
          img='SarahTest'
          name='Sarah Chima'
          country='Nigeria'
          charge='Software Engineer'
          company='ChatDesk'
          testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.' />
      </div>
    </div>
  );
}
// Exportamos el componente, para luego importarlo en otro archivo y poder utilizarlo alli.
export default App;
