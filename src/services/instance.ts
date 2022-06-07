import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://185.241.55.253/api'
})