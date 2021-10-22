const { Socket } = require('socket.io');

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: true,
    credentials: true,
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('nuevo usuario conectado');

  socket.on("sendMessage", (messageInfo) => {
    console.log("Enviando un mensaje");
    socket.broadcast.emit("receiveMessage", messageInfo);
  });
});

app.get('/', (req, res) => {
  res.send('<h1> Hola Mundo</h1>')
});

http.listen(4800, () => {
  console.log("Escuchando en puerto 4800");
});
