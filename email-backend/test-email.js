const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'naheed.virk@gmail.com', // Your actual Gmail address
    pass: 'fdtamqfumirdeymc'        // The new App Password
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Login failed:', error);
  } else {
    console.log('✅ Login successful! Ready to send emails.');
  }
});
