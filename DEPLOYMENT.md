# Deployment Guide

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on: http://localhost:3000

### Backend
```bash
cd backend
npm install
npm start
```
Runs on: http://localhost:5000

## Production Deployment

### Frontend (udhim.com)
1. Build the static files:
```bash
cd frontend
npm run build
```

2. Upload the entire `out` folder to your web server (udhim.com)

### Backend (udhim.electroitzone.com)
1. Upload these files to your API server:
   - server.js
   - package.json
   - .env (with production database credentials)
   - web.config (if using IIS/Plesk)

2. On the server, run:
```bash
npm install
npm start
```

3. Keep it running with PM2 (recommended):
```bash
npm install -g pm2
pm2 start server.js --name udhim-api
pm2 save
pm2 startup
```

## Environment Detection

## API Configuration

The app uses centralized API configuration in `frontend/lib/config.ts`:

- **Development**: Automatically uses `http://localhost:5000`
- **Production**: Uses `https://udhim.electroitzone.com`

**To change the backend URL:** Edit `frontend/lib/config.ts` and update the `production` URL.

The app automatically detects the environment - no manual switching needed!

## Database Configuration

Update `backend/.env` with your production database credentials:
```
DB_SERVER=your_server
DB_PORT=1433
DB_NAME=UDHIMTECH
DB_USER=sa
DB_PASSWORD=your_password
PORT=5000
```
