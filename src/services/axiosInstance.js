import axios from 'axios';



//Create a new Axios instance with a preconfigured base URL
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//Add a request interceptor to the Axios instance
axiosInstance.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem('authToken');
    //If a token exists, add the 'Authorization' header with the token
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    
    return config;
  },
  (error) => {
   
    Promise.reject(error);
  }
);


export default axiosInstance;