const express = require("express");
const router = express.Router();

let items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" },
  { id: 3, name: "Item Three" },
];

// Get all items
router.get("/items", (req, res) => {
  res.json(items);
});

// Get a single item by id
router.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");
  res.json(item);
});

// Create a new item
router.post("/items", (req, res) => {
  const item = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(item);
  res.status(201).json(item);
});

// Update an item by id
router.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");
  item.name = req.body.name;
  res.json(item);
});

// Delete an item by id
router.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send("Item not found");
  items.splice(itemIndex, 1);
  res.status(204).send();
});

module.exports = router;
