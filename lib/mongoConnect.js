import mongoose from "mongoose";
import db from "../database/models";

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};
const mongoConnect = async () => {
  const connection = await mongoose.createConnection(
    process.env.MONGO_URI,
    options
  );
  const Pokemon = connection.model("Pokemon", db.Pokemon);
  const User = connection.model("UserSchema", db.User);
  return {
    connection,
    models: {
      Pokemon,
      User
    }
  };
};

export default mongoConnect;
