require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware setup
app.use(cors());  // Enable CORS for all origins
app.use(bodyParser.json());


// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    /* user: 'naheed.virk@gmail.com',
    pass: 'uiyjqyvovmubluie' // From Gmail App Passwords */

    //user,pass is defined in .env file
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  }
});

// Endpoint to send email
app.post('/api/send-email', async (req, res) => {
  console.log('Request received:', req.body);  // Logs the request body

  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'naheed.virk@gmail.com',
    subject: `UI/UX Portfolio - New Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).send({ message: 'Failed to send email.', error: error.message });
  }
});

//Start the server
/*
'0.0.0.0': This binds the server to all network interfaces on the machine, making it accessible from external IPs. It allows requests from any device that can reach your server, which is typically needed when running the server in a production environment.
PORT: The port number you're using (3000 in your case).
() => { console.log(...) }: This is a callback function that will log a message once the server is up and running.
*/
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
/* app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); */

