import dexData from "../../data/pokedex.json";

export default (req, res) => {
  const d = dexData;
  res.status(200).json(d);
};
