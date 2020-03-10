// import mongoose from "mongoose";
import mongoMiddle from "../../lib/mongoMiddle";
import apiHandler from "../../lib/apiHandler";

export default mongoMiddle(async (req, res, connection, models) => {
  const { method } = req;
  apiHandler(res, method, {
    GET: response => {
      models.Pokemon.find({}, (error, poke) => {
        if (error) {
          //  connection.close();
          response.status(500).json({ error });
        } else {
          response.status(200).json(poke);
          //   connection.close();
        }
      });
    }
  });
});
