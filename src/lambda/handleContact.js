const Mailgun = require("mailgun-js")

const domain = "sandbox88e9638e1c1146f3863dac03bde5408a.mailgun.org"
const apiKey = "47f0da46c9a20f5ccf67854d389af32b-985b58f4-1b15d0a5"

const sendMeEmail = async (data) => {
  return new Promise((resolve, reject) => {
    console.log("Sending the email")
    const mailgun = Mailgun({
      apiKey,
      domain,
    })

    const mailData = {
      from: `Mailgun email <mailgun@${domain}>`,
      to: `dcrmls@gmail.com`,
      subject: "New Contact Form Submission",
      text: `${JSON.stringify(data)}`,
    }

    mailgun.messages().send(mailData, (err) => {
      if (err) return reject(err)

      resolve()
    })
  })
}

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body)
    console.log(data)
    await sendMeEmail(data)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email Sent",
      }),
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      body: e.message,
    }
  }
}
