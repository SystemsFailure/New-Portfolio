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

router.post('/reg', async (req, res) => {
    const data = {
        email: req.body?.data?.email ? req.body?.body?.email : undefined,
    }
    try {
        const customer = await customers.create({ name: "default", email: data.email });
        await customer.save()
        await customer.reload()
        res.sendStatus(200).send({message: 'you been registered'})
    } catch (error) {
        res.sendStatus(400).send({err: error})
    }
})

router.get('/getAllMessages', async (req, res) => {
    let arrayMessages = []
    if(req.body.email) {
        try {
            const allMessages = await messages.findAll({
                where: {
                    userEmail: req.body.email
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
            res.send({messagesList: allMessages})
        } catch (error) {
            console.log(error)
        }
    }
})

router.post('/sendMessage', async (req, res) => {
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