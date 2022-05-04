import axios from "axios";

export const key = '888d756c80062273ff5f149135026d72d57879ff';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'        
    }
});

export default api;


