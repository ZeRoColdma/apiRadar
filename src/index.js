const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const http = require("http");
const { setupWebSocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(
  "mongodb+srv://carlos:1001598@carlosestudo-oixuq.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

port = process.env.PORT || 3333;

server.listen(port);
