const express = require('express')
const { Server } = require("socket.io");
const {createServer} = require('http')
const cors = require('cors')

const routerMail  = require('./rouning/mailSender')
const router_mess = require('./rouning/mess')

const app = express()
const port = 3000
const sequelize =  require('./db/connecter')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

app.use(
    cors({
    //   origin: ['http://localhost:8080', 'https://back-end-portfolio.vercel.app', 'https://new-portfolio-kappa-ashen.vercel.app']
    //   origin: 'https://new-portfolio-kappa-ashen.vercel.app'
      origin: '*'
    })
  )
app.use(jsonParser)
app.use('/', router_mess)
app.use('/', routerMail)

const server = createServer(app);
const io = new Server(server, {
    // cors: ['http://localhost:8080', 'https://back-end-portfolio.vercel.app', 'https://new-portfolio-kappa-ashen.vercel.app'],
    cors: {
        origin: '*',
    }
});
io.on("connection", (socket) => {
    socket.emit("hello", "world");
    socket.emit('updateList', 'hello@gmail.com');
    
    socket.on('updateList', (data, callback) => {
        console.log('update list from server )')
        callback({
            to: 'admin'
        })
    })
});
server.listen(port, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`Example app listening on port ${port}`)
})