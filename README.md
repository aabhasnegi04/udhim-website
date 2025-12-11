# Udhim Technology Website

## Project Structure

```
├── frontend/     - Next.js static site (udhim.com)
└── backend/      - Express API server (udhim.electroitzone.com)
```

## Frontend (udhim.com)

Static Next.js site with all pages and components.

**Build:**
```bash
cd frontend
npm install
npm run build
```

Upload `frontend/out/` contents to `udhim.com` in Plesk.

## Backend (udhim.electroitzone.com)

Express API server with SQL Server database connection.

**Setup:**
1. Create subdomain `udhim.electroitzone.com` in Plesk
2. Upload `backend/` folder contents
3. Create `.env` file with database credentials
4. Run `npm install`
5. Start Node.js with `server.js`

**Environment Variables:**
```
DB_SERVER=160.187.80.75
DB_PORT=15347
DB_NAME=UDHIMTECH
DB_USER=sa
DB_PASSWORD=vmhoster#678
PORT=3000
```

## Database

Run this SQL in SSMS:
```sql
CREATE TABLE ContactSubmissions (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Phone NVARCHAR(20),
    Company NVARCHAR(100),
    ProductInterest NVARCHAR(100),
    Message NVARCHAR(MAX) NOT NULL,
    SubmittedAt DATETIME NOT NULL DEFAULT GETDATE(),
    Status NVARCHAR(20) DEFAULT 'New'
);
```

Done! 🚀
