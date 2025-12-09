import { NextRequest, NextResponse } from 'next/server'
import { getConnection, sql } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, productInterest } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Get database connection
    const pool = await getConnection()

    // Insert into database
    const result = await pool
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
      `)

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    )
  }
}
