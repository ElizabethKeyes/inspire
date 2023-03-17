

// @ts-ignore
export const bcwAPI = axios.create({
  baseURL: `https://bcw-sandbox.herokuapp.com/api`,
  timeout: 5000
})

// @ts-ignore
export const todoAPI = axios.create({
  baseURL: `https://bcw-sandbox.herokuapp.com/api/elizabeth/todos`,
  timeout: 5000
})