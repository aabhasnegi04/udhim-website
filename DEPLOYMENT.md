# Deployment Guide for Plesk

## ⚠️ IMPORTANT: Choose Your Deployment Method

You have **TWO options** for deploying to Plesk:

---

## Option 1: Static Export (Recommended for Simple Hosting)

**Pros:** Simple, fast, works on basic hosting  
**Cons:** Contact form will NOT save to database (form will show but won't work)

### Steps:

1. **Enable static export** in `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Upload the `out` folder contents** to Plesk (httpdocs or public_html)
   - The post-build script automatically creates:
     - `.htaccess` file
     - `products/index.html`
     - `about/index.html`
     - `industries/index.html`

4. **Done!** Your site will work at udhim.com

**Note:** The contact form will display but submissions won't save to the database.

---

## Option 2: Node.js Mode (Full Features with Database)

**Pros:** Contact form saves to SQL Server database  
**Cons:** Requires Node.js hosting in Plesk

### Steps:

1. **Database Setup:**
   - Open SSMS and connect to: `160.187.80.75:15347`
   - Run the SQL script from `database-setup.sql`

2. **Upload entire project** to Plesk (not just `out` folder)

3. **Configure Plesk Node.js:**
   - Go to domain → Node.js
   - Application mode: Production
   - Application root: `/httpdocs`
   - Application startup file: `node_modules/next/dist/bin/next`
   - Arguments: `start`
   - Node.js version: 18.x or higher

4. **Set Environment Variables in Plesk:**
   ```
   DB_SERVER=160.187.80.75
   DB_PORT=15347
   DB_NAME=UDHIMTECH
   DB_USER=sa
   DB_PASSWORD=vmhoster#678
   ```

5. **Install and Build via SSH/Terminal:**
   ```bash
   cd /var/www/vhosts/udhim.com/httpdocs
   npm install
   npm run build
   ```

6. **Start the application** in Plesk Node.js settings

7. **Test:** Submit the contact form and check the database!

---

## Current Configuration

Your project is currently set for **Option 2 (Node.js Mode)**.

To switch to **Option 1 (Static Export)**, update `next.config.js` as shown above.

---

## Local Development

```bash
npm install
npm run dev
```

Visit: http://localhost:3000

---

## Troubleshooting

**404 errors on /products, /about, /industries:**
- Static export: Make sure `.htaccess` is uploaded
- Node.js mode: Restart the Node.js application in Plesk

**Contact form not working:**
- Check if you're using Node.js mode
- Verify database credentials in environment variables
- Check Plesk error logs
