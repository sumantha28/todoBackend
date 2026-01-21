const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const taskRoute = require("./routes/index.routes");
const PORT = process.env.PORT;
const cors = require("cors");
const app = express();

app.use(cors());
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log(`connected to db`))
.catch((err) => console.log(err));

app.use(express.json());

app.use("/task", taskRoute);

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})