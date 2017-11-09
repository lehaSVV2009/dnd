import axios from 'axios'

export const DEFAULT_HTTP_HEADERS = {
  'Content-Type': 'application/json'
}

export const validateStatus = (status) => {
  return status >= 200 && status < 300
}

export const client = axios.create({
  baseURL: process.env.REACT_APP_DND_API_URL,
  headers: DEFAULT_HTTP_HEADERS,
  validateStatus: validateStatus
})

export const fetchHeroes = () => {
  return client.get('/heroes')
}

export const fetchHero = ({ id }) => {
  return client.get(`/heroes/${id}`)
}

export const updateHero = ({ id, hero }) => {
  return client.put(`/heroes/${id}`, hero)
}

export const deleteHero = ({ id }) => {
  return client.delete(`/heroes/${id}`)
}

export const fetchLastDay = () => {
  return client.get(`/days/last`)
}

export const createDay = () => {
  return client.post(`/days`)
}

export const fetchLastScene = ({ dayId }) => {
  return client.get(`/days/${dayId}/scenes/last`)
}

export const startScene = ({ dayId }) => {
  return client.post(`/days/${dayId}/scenes`)
}

export const stopScene = ({ sceneId }) => {
  return client.post(`/scenes/${sceneId}/stop`)
}

export const fetchAvailableTalents = ({ sceneId, heroId }) => {
  return client.get(`/scenes/${sceneId}/heroes/${heroId}/availableTalents`)
}

export const makeMove = ({ sceneId, turn }) => {
  return client.post(`/scenes/${sceneId}/turns`, turn)  
}