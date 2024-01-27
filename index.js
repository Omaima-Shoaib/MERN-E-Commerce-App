const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
dotenv.config();
//never share this secret key !!!!!!!!!!!!!!!!!!

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("successfully 0_0 DB 0_0 connected"))
  .catch((e) => console.log(e.message));

app.use(express.json());

app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running!");
});
