require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const playerRoutes = require("./routes/playerRoutes");
const singleRoutes = require("./routes/singleRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/player", playerRoutes);
app.use("/api/single", singleRoutes);

app.get("/", (req, res) => {
  res.send("Wordlee API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));