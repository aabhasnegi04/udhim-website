# API Configuration

This directory contains centralized API configuration and utilities.

## Files

### `config.ts`
Central configuration for API endpoints and environment detection.

**To change the backend URL:**
```typescript
// In config.ts, update the production URL:
api: {
  development: 'http://localhost:5000',
  production: 'https://your-new-backend-domain.com', // Change this
}
```

### `api.ts`
Utility functions for making API calls with automatic environment detection.

**Usage:**
```typescript
import { api } from '@/lib/api'

// Submit contact form
const result = await api.contact.submit(formData)

// Or use generic API call
const data = await api.call('/api/users', { method: 'GET' })
```

### `utils.ts`
General utility functions including Tailwind class merging and API re-exports.

## Adding New API Endpoints

1. **Add endpoint to config:**
```typescript
// In config.ts
endpoints: {
  contact: '/api/contact',
  users: '/api/users',        // Add new endpoint
  products: '/api/products',  // Add new endpoint
}
```

2. **Add API method:**
```typescript
// In api.ts
export const api = {
  // ... existing methods
  
  users: {
    get: async (id: string) => api.call(`/api/users/${id}`),
    create: async (data: any) => api.call(config.endpoints.users, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }
}
```

3. **Use in components:**
```typescript
import { api } from '@/lib/api'

const users = await api.users.get('123')
```

## Environment Detection

The system automatically detects:
- **Development**: `localhost` or `127.0.0.1` → uses `http://localhost:5000`
- **Production**: Any other domain → uses configured production URL

No manual environment switching needed!