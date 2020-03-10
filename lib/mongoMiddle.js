import connectMongo from "../database";

const mongoMiddle = handler => async (req, res) => {
  const { connection, models } = await connectMongo();
  try {
    await handler(req, res, connection, models);
  } catch (e) {
    connection.close();
    res.status(500).json({ error: e.message || "Something went wrong" });
  }
};

export default mongoMiddle;
