import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
