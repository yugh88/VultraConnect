// src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

export const api = {
  // Member 1 will implement these methods
  chat: async (message) => {
    console.log('Chat endpoint will be implemented by Member 1')
    return { message: 'API not implemented yet' }
  },

  getStatus: async () => {
    console.log('Status endpoint will be implemented by Member 1')
    return { status: 'offline' }
  }
}