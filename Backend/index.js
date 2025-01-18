require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const cookieParser = require("cookie-parser");

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

const corsOptions = {
  origin: (origin, callback) => {
    console.log(`Incoming origin: ${origin}`); // Debugging
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`CORS error: Origin ${origin} not allowed`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());


app.use("/", require("./routes/StocksRoutes"));
app.use("/auth", require("./routes/AuthRoutes"));


app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
  mongoose.connect(url);
  console.log("DB connected");
});
