// Quick test script to verify database connection
require('dotenv').config({ path: '.env.local' })
const sql = require('mssql')

const config = {
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
}

async function testConnection() {
  try {
    console.log('Connecting to SQL Server...')
    console.log('Server:', config.server)
    console.log('Port:', config.port)
    console.log('Database:', config.database)
    console.log('User:', config.user)
    
    const pool = await sql.connect(config)
    console.log('✅ Connected successfully!')
    
    const result = await pool.request().query('SELECT @@VERSION as version')
    console.log('SQL Server Version:', result.recordset[0].version)
    
    await pool.close()
    console.log('Connection closed.')
  } catch (err) {
    console.error('❌ Connection failed:', err.message)
  }
}

testConnection()
