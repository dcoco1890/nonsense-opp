import mongoMiddle from "../../lib/mongoMiddle";
import apiHandler from "../../lib/apiHandler";

export default mongoMiddle(async (req, res, connection, models) => {
  const { method } = req;
  const stuff = req.body;

  return new Promise(resolve => {
    apiHandler(res, method, {
      GET: response => {
        models.Pokemon.find({}, (err, poke) => {
          if (err) {
            connection.close();
            response.status(500).json({ err });
            resolve();
          } else {
            response.status(200).json(poke);
            connection.close();
            resolve();
          }
        });
      },
      POST: response => {
        models.Pokemon.create(stuff, (err, rese) => {
          if (err) {
            connection.close();
            response.status(500).json({ err });
            resolve();
          } else {
            response.status(200).json(rese);
            connection.close();
            resolve();
          }
        });
      }
    });
  });
});

