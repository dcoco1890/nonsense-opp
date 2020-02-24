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
  // Added this to prevent the Mega Evolutions from showing twice. The picture
  // is the same for both reg and mega so this made more sense.
  let oldNum = 0;
  let incomingNum = 1;
  return {
    poke: data.results.filter(item => {
      if (oldNum !== 151) {
        incomingNum = parseInt(item.national_number);
        if (oldNum !== incomingNum) {
          oldNum = incomingNum;
          return item;
        }
      }
    })
  };
};
export default pokelist;
