import '../stylesheets/FirstSection.css';
// Este es un componente, lo sabemos porque el nombre de la funcion comienza con mayuscula.
function FirstSection() {
  return (
    <div className="first-section">
      <div>Hola</div>
    </div>
  );
}
// Exportamos el componente, para luego importarlo en otro archivo y poder utilizarlo alli.
export default FirstSection;
