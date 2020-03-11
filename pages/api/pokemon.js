import mongoConnect from "../../lib/mongoConnect";

export default async (req, res) => {
  //   const connection = await mongoose.createConnection(
  //     process.env.MONGO_URI,
  //     options
  //   );

  const { connection, models } = await mongoConnect();

  return new Promise(resolve => {
    const { method } = req;
    if (method === "GET") {
      models.Pokemon.find({}, (err, poke) => {
        if (err) {
          connection.close();
          res.status(500).json({ err });
          resolve();
        } else {
          res.status(200).json(poke);
          connection.close();
          resolve();
        }
      });
    } else if (method === "POST") {
      models.Pokemon.create({ name: "gay" }, (err, rese) => {
        if (err) {
          connection.close();
          res.status(500).json({ err });
          resolve();
        } else {
          res.status(200).json(rese);

          connection.close();
          resolve();
        }
      });
    }
  });
};
