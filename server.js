require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose')
const app = express();
//const dbConfig = require("./config/dbConfig");
app.use(express.json()); //To destructure the email and password

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");
const path = require("path");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

// CYLIC build configuration
app.use("/", express.static("client/build"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
connectDB().then(() => {
  app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
})
