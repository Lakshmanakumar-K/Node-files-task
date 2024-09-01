import express from "express";
import createRouter from "./routes/createfile.js";
import fetchRouter from "./routes/fetchFolder.js"

const server = express();

server.use(express.json());

server.use("/create",createRouter)
server.use("/fetch",fetchRouter)

const PORT = 4000;

server.listen(PORT,()=>
console.log("Server listening on port 4000")
);