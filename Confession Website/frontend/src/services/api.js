import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'
});

export async function getConfessions() {
  const res = await api.get('/confessions');
  return res.data;
}

export async function createConfession(payload) {
  const res = await api.post('/confessions', payload);
  return res.data;
}

export default api;
