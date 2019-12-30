import axios from 'axios';


// Instance
const backend = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// Response 
export const ping = async () => {
  const resp = await backend.get('/ping')
  return resp.data;
};
// Auth


// SignUp


// Login 


// User Profile 


