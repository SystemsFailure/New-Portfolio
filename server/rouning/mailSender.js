
const transporter = require('../stmpMailer/emailService')

const express = require('express')
const routerMail = express.Router()


routerMail.post('/sendToEmail', async (req, res) => {
    if(!req.body.data) return;
    const data = {
        from: req.body?.data?.email,
        to: 'errortvl01@gmail.com',
        subject: req.body.data.user_name,
        text: req.body.data.text,
    }
    
    try {
        transporter.sendMail(data, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              res.send({result: true, message: 'mail been sended'})
            }
          });
    } catch (error) {
        res.sendStatus(400).send({err: error})
    }
})

module.exports = routerMail
