import config from './config'

// API utility functions
export const api = {
  // Get full API URL for an endpoint
  getUrl: (endpoint: string): string => {
    const baseUrl = config.getApiBaseUrl()
    return `${baseUrl}${endpoint}`
  },

  // Generic API call function
  call: async (endpoint: string, options: RequestInit = {}) => {
    const url = api.getUrl(endpoint)
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }

    const response = await fetch(url, { ...defaultOptions, ...options })
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status} ${response.statusText}`)
    }

    return response.json()
  },

  // Specific API methods
  contact: {
    submit: async (data: any) => {
      return api.call(config.endpoints.contact, {
        method: 'POST',
        body: JSON.stringify(data),
      })
    }
  },

  // Add more API methods here as needed
  // users: {
  //   get: async (id: string) => api.call(`/api/users/${id}`),
  //   create: async (data: any) => api.call('/api/users', { method: 'POST', body: JSON.stringify(data) }),
  // }
}

export default api