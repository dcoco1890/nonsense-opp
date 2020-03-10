import mongoose from "mongoose";
import * as dbModels from "./models";

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};
const connectMongo = async () => {
  const connection = await mongoose.createConnection(
    process.env.MONGO_URI,
    options
  );

  return {
    connection,
    models: {
      dbModels
    }
  };
};

export default connectMongo;
