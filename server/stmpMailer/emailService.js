const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'errorTVL01@gmail.com',
        pass: 'TVL31415Unity',
    }
})

module.exports = transporter
