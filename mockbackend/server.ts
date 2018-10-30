import express from "express";
import { seedDb } from "./mocks";
import http from "http";
import { todoRouter, todoSockets, authorRouter, authorSockets } from "./api";
import ioClient from "socket.io";
import path from "path";

const app = express();
const port = 3000;
const server = http.createServer(app);
const io = ioClient(server);

seedDb();

app.use("/todos", todoRouter);
app.use("/authors", authorRouter);

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

// Serve test HTML
app.use("/", express.static(path.join(__dirname, "./")));

/** Websocket Impl */
io.on("connection", socket => {
  console.log("connected");
  authorSockets(socket);
  todoSockets(socket);
});
