const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

mongoose.connect(process.env.MONGO_URI, options).then(
  () => {
    console.log("db connected");
  },
  err => {
    console.log("err connecting to db");
    console.log(err);
  }
);

module.exports = mongoose.connection;
