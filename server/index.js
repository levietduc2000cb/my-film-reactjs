require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routes/auth");
const myListFilmRouter = require("./routes/mylistfilm");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@my-film.adubw.mongodb.net/my-film?retryWrites=true&w=majority`
    );
    console.log("MongoseDB connect success");
  } catch (error) {
    console.log("MongoseDB connect error");
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/mylistfilm", myListFilmRouter);

const PORT = 5000;
app.listen(PORT, () => console.log("Server start Port:", PORT));
