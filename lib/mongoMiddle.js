import mongoConnect from "./mongoConnect";

const mongoMiddle = handler => async (req, res) => {
  const { connection, models } = await mongoConnect();
  try {
    await handler(req, res, connection, models);
  } catch (e) {
    connection.close();
    res.status(500).json({ error: e.message || "Something went wrong" });
  }
};

export default mongoMiddle;
