let express = require('express')
let nodemailer = require('nodemailer');

let app = express()
let port = 3000

const list_messages = []
const list_emails = []
// let fs = require('fs').promises
const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user:'allistirking422@gmail.com',
        pass: 'fisfehpgbtywvnvs'
    },
    secure: true,
})

let bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

const cors = require('cors');
// const {response} = require("express");
app.use(cors())

// app.use(cors({
//     origin: ['http://localhost:8080/'],
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.post('/register', (request, response) => {
    if(request.body.email) {
        console.log(request.body.email)
        let email = JSON.parse(request.body.email)
        let email_object = {
            email: email
        }
        list_emails.push(email_object)
        const user = {
            'name': 'empty',
            'email': email,
            'token': 'empty'
        }
        // response.sendStatus(200)
        response.send({user})
    }
})


app.post('/askEmail', (request, response) => {
    let subject = 'Вопрос от пользователя'
    let userName = request.body.userName
    let userEmail = request.body.userEmail
    let text = request.body.text
    console.log(text)
    let mailDate = {
        from: userEmail,
        to: 'allistirking422@gmail.com',
        subject: subject + ` ${userName}`,
        text: `${text}`,
        html: `<b>${text}</b>`
    }
    transporter.sendMail(mailDate, (error, info) => {
        if(error) return console.log(error)
        response.status(200)
            .send({message: 'Mail send', message_id: info.messageId})
    })
})



////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// API Messages


// app.post('/askQuestion', async (request, response, next) => {
//     fs.readFile('./file.txt')
//         .then(data => {
//             if(request.body) {
//                 setTimeout(()=> {
//                     response.send(data)
//                 }, 10000)
//             }
//         })
//         .catch(err => {
//             console.error(err)
//             response.status(500).send(err)
//         })
// });



app.post('/sendMessage', (request, response) => {
    if(request.body.user_mess) {
        let mess = request.body.user_mess.message
        let mess_object = {
            id: Date.now(),
            message: mess
        }
        list_messages.push(mess_object)
        console.log(mess_object.message)
        response.status(200).send({list_messages})
    } else {
        response.send('Email dont exit')
    }
})


app.get('/allMessages', (request, response) => {
    console.log(list_messages.message)
    response.status(200).send({list_messages})
})




////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})