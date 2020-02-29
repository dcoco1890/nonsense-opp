import fetch from "isomorphic-unfetch";
import Poke from "../comps/Poke";
import Layout from "../comps/Layout";
import { useState } from "react";

const Index = props => {
  // Grabbing monster data returned form getInitProps
  // CurrentMons is what we display to the user
  const [allMonsters] = useState(props.poke);
  const [currentMons, setCurrent] = useState(allMonsters);

  // ******** Filter functions to separate mons by region ***************
  const kanto = allMonsters.filter((mon, i) => {
    if (i < 151) {
      return true;
    }
  });

  const johto = allMonsters.filter((mon, i) => {
    if (i >= 151 && i < 251) {
      return true;
    }
  });

  // ******* CLick methods passed down to each button. Sets current mons to that region
  const clickKanto = () => setCurrent(kanto);
  const clickJohto = () => setCurrent(johto);
  const clickAll = () => setCurrent(allMonsters);

  // The actual comp. Layout takes a prop called content which we pass what we want in there.
  // It also takes as props the click method to change the view.

  return (
    <Layout
      kanto={() => clickKanto()}
      showAll={() => clickAll()}
      johto={() => clickJohto()}
      content={
        <main>
          {currentMons.map((mon, i) => {
            return <Poke key={i} name={mon.name} img={mon.sprites.large} />;
          })}
        </main>
      }
    />
  );
};

// Initial props getting. Grabs Json data from an API and filters out the garbage.
Index.getInitialProps = async function() {
  const res = await fetch(`https://unpkg.com/pokemons@1.1.0/pokemons.json`);
  const data = await res.json();
  // Added this to prevent the Mega Evolutions from showing twice. The picture
  // is the same for both reg and mega so this made more sense.
  let oldNum = 0;
  let incomingNum = 1;
  return {
    poke: data.results.filter(item => {
      incomingNum = parseInt(item.national_number);
      if (oldNum !== incomingNum) {
        oldNum = incomingNum;
        return item;
      }
    })
  };
};
export default Index;
