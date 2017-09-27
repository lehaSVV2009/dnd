import axios from 'axios'

export const DEFAULT_HTTP_HEADERS = {
  'Content-Type': 'application/json'
}

export const validateStatus = (status) => {
  return status >= 200 && status < 300
}

export const client = axios.create({
  baseURL: 'http://demo7668243.mockable.io',
  headers: DEFAULT_HTTP_HEADERS,
  validateStatus: validateStatus
})

export const fetchHero = ({ id }) => {
  return client.get(`/heroes/${id}`)
}