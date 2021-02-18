const express = require('express')
const nodemailer = require('nodemailer')
// const validator = require('validator')
// const xssFilters = require('xss-filters')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const app = express()
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json())
app.use(fileUpload())

app.get('/', function (req, res) {
  res.status(405).json({ error: 'sorry!' })
})

app.post('/', function (req, res) {
  sendMail({ files: req.files, body: req.body })
  res.status(200).json({ message: 'OH YEAH' })
})

module.exports = {
  path: '/api/vacancy',
  handler: app
}

// const validateAndSanitize = (key, value) => {
//   const rejectFunctions = {
//     name: v => v.length < 4,
//     mail: v => !validator.isEmail(v)
//   }

//   // If object has key and function returns false, return sanitized input. Else, return false
//   return (
//     rejectFunctions.hasOwnProperty(key) &&
//     !rejectFunctions[key](value) &&
//     xssFilters.inHTMLData(value)
//   )
// }

const sendMail = ({ body, files }) => {
  let filesArray = []
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'dopsmailer@gmail.com',
      pass: 'goodPassword505'
    }
  })

  if (files) {
    filesArray = Object.values(files).map(({ name, data }, index) => ({
      filename: name,
      content: data
    }))
  }

  transporter.sendMail({
    from: 'dopsdigitalteam@gmail.com',
    to: 'bogdanotix@gmail.com',
    subject: 'Vacancy',
    attachments: filesArray,
    text: `
    Name:          ${body.name}
    Email:         ${body.email}
    Phone:         ${body.phone} 
    About Myself:  ${body.msg}
    `
  })
}
