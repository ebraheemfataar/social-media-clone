const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

const itemsRouter = require("./routes/items");
app.use("/api", itemsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
