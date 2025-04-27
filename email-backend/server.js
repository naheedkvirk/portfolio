const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Use CORS middleware
app.use(cors()); // This allows all origins, adjust for tighter security if needed

// Middleware to parse JSON bodies
app.use(express.json());  // Make sure this is included

// Serve the static files from the 'htdocs' directory
app.use(express.static('/home/bitnami/htdocs', {
  maxAge: 0 // Disable caching for testing, adjust for production
}));

// Simple POST endpoint to send email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body; // Destructure the body

  // Check if required fields are present in the body
/*   if (!name || !email || !message) {
    return res.status(400).send({ message: 'Missing required fields' });
  } */

  // Set up nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'naheed.virk@gmail.com',
      pass: 'fdtamqfumirdeymc' // Ensure you are using a Gmail App password
    }
  });

  const mailOptions = {
    from: email,
    to: 'naheed.virk@gmail.com',
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to send email.', error: error.message });
  }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
