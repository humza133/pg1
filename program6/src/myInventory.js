const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
let inventory = [
  { id: 1, name: "item1", quantity: 10, price: 100 },
  { id: 2, name: "item2", quantity: 20, price: 200 },
  { id: 3, name: "item3", quantity: 30, price: 300 },
];
app.get("/", (req, res) => {
  res.json(inventory);
});
app.post("/add", (req, res) => {
  inventory.push(req.body);
  res.json(inventory);
});
app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
