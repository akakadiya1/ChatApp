const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io 
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

app.use(express.static(path.resolve(__dirname, "public")));

app.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname, "public", "index.html"));
})

server.listen(8080, () => console.log(`Server started at PORT: 8080`));