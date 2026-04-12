const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')
const nodemailer = require('nodemailer')

router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  try {
    const contact = new Contact({ name, email, message })
    await contact.save()

    // Optional: send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      })
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'amansingh@jklu.edu.in',
        subject: `Portfolio Contact: ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      })
    }

    res.status(201).json({ success: true, message: 'Message saved.' })
  } catch (err) {
    console.error('Contact save error:', err)
    res.status(500).json({ error: 'Server error. Please try again.' })
  }
})

module.exports = router
