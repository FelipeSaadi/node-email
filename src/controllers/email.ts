import { RequestHandler } from "express"
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

export const contact: RequestHandler = async (req, res) => {
  const { from, to, subject, html, text } = req.body

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  const message = {
    from,
    to,
    subject,
    html,
    text
  }

  const info = await transport.sendMail(message)

  transport.close()

  console.log(info)

  res.json({ sended: true })
}