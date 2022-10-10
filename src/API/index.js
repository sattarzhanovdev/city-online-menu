import axios from "axios"

export const API = {
  getFoods: () => {
    return axios.get('/foods.json')
  }
}