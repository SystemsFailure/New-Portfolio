const express = require('express')
const router = express.Router()
const customers = require('../db/models/customer')
const messages = require('../db/models/messages')

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
router.get('/', (req, res) => {
    console.log('hello')
})

router.get('/getClients', async (req, res) => {
    try {
        let list = []
        const customersInst = await customers.findAll()
        customersInst.forEach(el => {
            let instanceCustomer = {
                id: el.id,
                name: el.name,
                userEmail: el.email,
                updatedAt: el.updatedAt,
                createdAt: el.createdAt,
            }
            list.push(instanceCustomer)
        })
        res.send({list: list})
    } catch (error) {
        console.log('error : ', error)
        res.send({result: false, message: error})
    }
})

router.post('/reg', async (req, res) => {
    const data = {
        email: req.body.data.email,
        name: req.body.data.name,
    }
    try {
        if(req.body.data.email) {
            const customer = await customers.create(data);
            await customer.save()
            await customer.reload()
            res.send({message: 'you been registered'})
        } else {
            res.send({result: false, message: 'you dont to fil a fields'})
        }
    } catch (error) {
        res.send({err: error})
    }
})

router.get('/getAllMessages', async (req, res) => {
    let arrayMessages = []
    console.log(req.query.userEmail, req.query.userEmail, req.body.userEmail, req.params.userEmail)
    if(req.query.userEmail) {
        try {
            const allMessages = await messages.findAll({
                where: {
                    userEmail: req.query.userEmail
                }
            })
            allMessages.forEach(el => {
                let instanceList = {
                    id: el.id,
                    content: el.content,
                    userEmail: el.userEmail,

                }
                arrayMessages.push(instanceList)
            })
            res.send({list: allMessages})
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log('req.body.email is null')
    }
})

router.post('/sendMessage', async (req, res) => {
    console.log('info :: ', req.body.data, req.body.message, req.body, req.baseUrl)
    if(req.body.data)
    {
        const message = await messages.create(
            {
                content: req.body.data.content ? req.body.data.content : null,
                userEmail: req.body.data.userEmail ? req.body.data.userEmail : null,
                to: req.body.data.to ? req.body.data.to : null,
                adminId: req.body.data.adminId ? req.body.data.adminId : null,
            }
        )
        message.save()
        res.send({rs: true})
    } else {
        res.send({rs: false})
    }
})

router.delete('/destroyMessages', async (req, res) => {
    if(req.body.email) {
        await messages.destroy({
            where: {
              userEmail: req.body.email
            }
        });
        res.send({status: 200, result: 'messages been deleted'})
    }
})

module.exports = router