const express = require("express");
const dataconnet = require("./Database/dataconfig");
const Product = require("./Model/taskSchema");

const app = express();
app.use(express.json());

dataconnet();

app.get("/", (req, res) => {
  res.send("this is the api site");
});

app.post("/api/product", async (req, res) => {
  try {
    let product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/api/product", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, req.body);
    res.status(200).json(products);
    if (!products) {
      res.status(404).json("product not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.delete("/api/product/:id", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3030, () => {
  console.log("server is running port 3030");
});
