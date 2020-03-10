import mongoose from "mongoose";
import dbConnection from "../../database/";
import dbModels from "../../database/models";

export default async (req, res) => {
  const connection = await dbConnection;

  try {
    const {
      query: { name },
      method
    } = req;

    switch (method) {
      case "POST":
        dbModels.Pokemon.create({ name }, (error, user) => {
          if (error) {
            connection.close();
            res.status(500).json({ error });
          } else {
            res.status(200).json(user);
            connection.close();
          }
        });
        break;
      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (e) {
    connection.close();
    res.status(500).json({ error: e.message || "something went wrong" });
  }
};
