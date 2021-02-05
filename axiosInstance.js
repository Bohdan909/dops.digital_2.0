import axios from 'axios'

const instanceAxios = axios.create({
  baseURL: process.env.strapiBaseUri,
  timeout: 10000
})

export default instanceAxios
