
const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const fs = require('fs');

router.post('/generate', (req, res) => {
  const { name, level } = req.body;
  const doc = new PDFDocument();
  const path = `./certificates/${name.replace(/\s+/g, '_')}_${level}_cert.pdf`;

  doc.fontSize(25).text('ALL IN WON Certificate of Completion', { align: 'center' });
  doc.moveDown().fontSize(16).text(\`This certifies that \${name} has successfully completed the \${level} course in Medical Billing.\`, { align: 'center' });
  doc.end();

  doc.pipe(fs.createWriteStream(path));
  doc.on('end', () => res.download(path));
});

module.exports = router;
