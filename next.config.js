require("dotenv").config();
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  console.log(`-- isDev: ${isDev} -- isProd: ${isProd} -- `);
  const env = {
    MONGO_URI: (() => {
      if (isDev) return "mongodb://localhost/Pokemon";
      if (isProd)
        return `mongodb+srv://dcoco91:${process.env.MY_PASS}@cluster0-8a7ys.mongodb.net/test?retryWrites=true&w=majority`;
    })()
  };
  return {
    env
  };
};
