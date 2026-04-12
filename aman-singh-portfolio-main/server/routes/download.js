const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')

const cvDir = path.join(__dirname, '../assets/cv')

router.get('/cv-pdf', (req, res) => {
  const filePath = path.join(cvDir, 'resume.pdf')
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'PDF not found.' })
  }
  res.download(filePath, 'Aman_Singh_Resume.pdf')
})

router.get('/cv-docx', (req, res) => {
  const filePath = path.join(cvDir, 'resume.docx')
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'DOCX not found.' })
  }
  res.download(filePath, 'Aman_Singh_Resume.docx')
})

module.exports = router
