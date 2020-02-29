export default props => (
  <div id="header">
    <h1>Pokemon Data</h1>
    <div id="poke-buttons">
      <button type="button" onClick={props.showAll}>
        Show All
      </button>
      <button type="button" onClick={props.johto}>
        Johto Pokedex
      </button>
      <button type="button" onClick={props.kanto}>
        Kanto Pokedex
      </button>
    </div>
  </div>
);
