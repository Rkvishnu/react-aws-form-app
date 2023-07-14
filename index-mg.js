const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const db = mongoose.connect("mongodb://localhost:27017/mydb");

app.use(express.json());
app.use(cors());
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
});

const UserModel = mongoose.model("User", FormSchema);

app.post("/submit", async (req, res) => {
  try {
    const formData = req.body;
    const form = new UserModel({
      name: formData.name,
      email: formData.email,
      location: formData.location,
    });

    await form.save();

    res.status(200).send("Form submitted successfully!");
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/getitems", async (req, res) => {
  const data = await UserModel.find({});

  return res.status(201).json(
    { message: "items found!" },
     data
     );
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
