import fetch from "isomorphic-unfetch";
import Poke from "../comps/Poke";
import Layout from "../comps/Layout";
import { useState, useReducer } from "react";

const monsterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "KANTO":
      return "KANTO";
    case "JOHTO":
      return "JOHTO";
    default:
      throw new Error();
  }
};

const Index = props => {
  // Grabbing monster data returned form getInitProps
  const [monsters] = useState(props.poke);
  const [filter, dispatchFilter] = useReducer(monsterReducer, "ALL");
  return (
    <Layout
      content={
        <main>
          {monsters.map((mon, i) => {
            return <Poke key={i} name={mon.name} img={mon.sprites.large} />;
          })}
        </main>
      }
    />
  );
};

Index.getInitialProps = async function() {
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
export default Index;
