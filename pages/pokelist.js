import fetch from "isomorphic-unfetch";
import Poke from "../comps/Poke";
import Layout from "../comps/Layout";

const pokelist = props => {
  return (
    <Layout
      content={
        <main>
          {props.poke.map((mon, i) => {
            return <Poke key={i} name={mon.name} img={mon.sprites.large} />;
          })}
        </main>
      }
    />
  );
};

pokelist.getInitialProps = async function() {
  const res = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");
  const data = await res.json();

  return {
    poke: data.results.filter((item, i) => {
      if (i < 200) {
        if (!item.evolution) {
          return item;
        }
      }
    })
  };
};
export default pokelist;
