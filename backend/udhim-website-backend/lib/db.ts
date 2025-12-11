import sql from 'mssql'

const config: sql.config = {
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  server: process.env.DB_SERVER || '',
  port: parseInt(process.env.DB_PORT || '1433'),
  database: process.env.DB_NAME || '',
  options: {
    encrypt: false, // Set to false for non-Azure SQL
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
}

let pool: sql.ConnectionPool | null = null

export async function getConnection() {
  try {
    if (!pool) {
      pool = await sql.connect(config)
    }
    return pool
  } catch (err) {
    console.error('Database connection failed:', err)
    throw err
  }
}

export { sql }
