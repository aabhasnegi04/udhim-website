const express = require('express');
const cors = require('cors');
const sql = require('mssql');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database configuration
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT || '1433'),
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

// Middleware - Auto-accept both localhost and production domains
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'https://udhim.com',
      'https://www.udhim.com',
      'http://udhim.com',
      'http://www.udhim.com',
      'http://localhost:3000',
      'http://127.0.0.1:3000'
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1 || origin.startsWith('http://localhost:')) {
      callback(null, true);
    } else {
      callback(null, true); // Allow all for now, you can restrict later
    }
  },
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'API is running', version: '1.0.0' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, message, productInterest } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Name, email, and message are required',
      });
    }

    // Connect to database
    const pool = await sql.connect(dbConfig);

    // Insert into database
    await pool
      .request()
      .input('name', sql.NVarChar, name)
      .input('email', sql.NVarChar, email)
      .input('phone', sql.NVarChar, phone || null)
      .input('company', sql.NVarChar, company || null)
      .input('message', sql.NVarChar, message)
      .input('productInterest', sql.NVarChar, productInterest || null)
      .query(`
        INSERT INTO ContactSubmissions 
        (Name, Email, Phone, Company, Message, ProductInterest, SubmittedAt)
        VALUES (@name, @email, @phone, @company, @message, @productInterest, GETDATE())
      `);

    res.json({
      success: true,
      message: 'Form submitted successfully!',
    });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({
      error: 'Failed to submit form. Please try again.',
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
