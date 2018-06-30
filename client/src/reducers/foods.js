import axios from 'axios'
const FOODS = 'FOODS'
const FOOD = 'FOOD'

export const getFoods = () => {
  return(dispatch) => {
    axios.get('/api/foods')
    .then( res => {
      dispatch({ type: FOODS, foods: res.data, headers: res.headers })
    })
  }
}

export const getFood = (food) => {
  return(dispatch) => {
    axios.get(`/api/${food.id}`)
    .then (res => {
      dispatch({ type: FOOD, food: res.data, headers: res.headers })
    })
  }
}

export default (state = [], action ) => {
  switch (action.type) {
    case FOODS:
      return action.foods
    case FOOD:
      return action.food
    default:
      return state
  }
}