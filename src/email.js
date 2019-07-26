const key = process.env.SENDGRID_KEY
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(key)

const sendWelcomeEmail = (body)=>{
    sgMail.send({
        to : 'ishantgupta777@gmail.com',
        from : 'me@ishantgupta.in',
        subject : 'New msg on portfolio',
        text : `name : ${body.name}
                email : ${body.email}
                subject : ${body.subject}
                message : ${body.message}`
    })
}

module.exports = {
    sendWelcomeEmail
}