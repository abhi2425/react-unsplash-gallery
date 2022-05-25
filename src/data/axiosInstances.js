import axios from 'axios'
import { BASE_URL } from '../config/config'

const KEY = process.env.UNSPLASH_KEY
let headers = {}
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url.includes('?')) config.url = config.url + `&client_id=${KEY}`
    else config.url = config.url + `?client_id=${KEY}`
    return config
  },
  (error) => Promise.reject(error),
)

export default axiosInstance
