const http = require("http");
const express = require("express");
const path = require("path");

const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, "public")));

app.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname, "public", "index.html"));
})

server.listen(8080, () => console.log(`Server started at PORT: 8080`));