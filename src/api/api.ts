import axios from 'axios';
import { parseCookies } from 'nookies'

const { 'pizzaria.token': token} = parseCookies()

export const api = axios.create({
    baseURL: 'http://localhost:8088'
});

if(token){
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}