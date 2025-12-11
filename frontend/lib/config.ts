// API Configuration
const config = {
  // API Base URLs
  api: {
    // Development API URL (when running locally)
    development: 'http://localhost:5000',
    
    // Production API URL (when deployed)
    production: 'https://udhim.electroitzone.com',
  },
  
  // Automatically detect environment and return appropriate API base URL
  getApiBaseUrl: () => {
    if (typeof window === 'undefined') {
      // Server-side rendering - use production URL
      return config.api.production
    }
    
    // Client-side - detect localhost
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1'
    
    return isLocalhost ? config.api.development : config.api.production
  },
  
  // API Endpoints
  endpoints: {
    contact: '/api/contact',
    // Add more endpoints here as needed
    // users: '/api/users',
    // products: '/api/products',
  }
}

export default config