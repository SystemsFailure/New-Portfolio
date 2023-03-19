const express = require('express')
const { Server } = require("socket.io");
const {createServer} = require('http')
const cors = require('cors')

const router_mess = require('./rouning/mess')
const app = express()
const port = 3000
const sequelize =  require('./db/connecter')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

app.use(
    cors({
      origin: 'http://localhost:8080/'
    })
  )
app.use(jsonParser)
app.use('/', router_mess)

const server = createServer(app);
const io = new Server(server, {
    cors: 'http://localhost:8080/',
    serveClient: false,
});
io.on('connection', (socket) => {
    socket.conn.on('update', () => {
        console.log("upgraded transport", socket.conn.transport.name)
    })    
})
app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`Example app listening on port ${port}`)
})