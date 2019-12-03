import axios from "axios"
import Qs from "qs"

const baseUrl = window.baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3001" : "http://47.52.137.175:3001"

const http = (options) => {
  let config = Object.assign({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    timeout: 3000
  }, options)

  if (config.headers['Content-Type'] !== "multipart/form-data") {
    config.data = Qs.stringify(config.data)
  }

  return axios(config)
}

export default http