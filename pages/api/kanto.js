import dexData from "../../data/pokedex.json";

const oneFiveOne = dexData.filter((item, i) => i < 151);

export default (req, res) => {
  res.status(200).json({
    oneFiveOne
  });
};
