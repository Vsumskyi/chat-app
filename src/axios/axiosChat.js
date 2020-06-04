import axios from 'axios'

export const axiosBaseUrl = axios.create({
  baseURL: 'https://chat-ef52a.firebaseio.com/',
})

export const axiosJokeUrl = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/random'
})