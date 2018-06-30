import axios from 'axios'
const FOODS = 'FOODS'
const FOOD = 'FOOD'
const ADD_FOOD = 'ADD_FOOD'
const UPDATE_FOOD = 'UPDATE_FOOD'
const DESTROY_FOOD = 'DESTROY_FOOD'


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
export const addFood = (food) => {
  return(dispatch) => {
    axios.post('/api/food', { food })
    .then (res => {
      dispatch({ type: ADD_FOOD, food: res.data, headers: res.headers })
    })
  }
}
export const updateFood = (food) => {
  return(dispatch) => {
    axios.put(`/api/${food.id}`, { food })
    .then (res => {
      dispatch({ type: UPDATE_FOOD, food: res.data, headers: res.headers })
    })
  }
}
export const destroyFood = (food) => {
  return(dispatch) => {
    axios.get(`/api/${food.id}`).destroy
    .then (res => {
      dispatch({ type: DESTROY_FOOD, food: res.data, headers: res.headers })
    })
  }
}
  

export default (state = [], action ) => {
  switch (action.type) {
    case FOODS:
      return action.foods
    case FOOD:
      return action.food
      case ADD_FOOD :
      return [action.food, ...state]
      case DELETE_FOOD:
      return state.filter( a => a.id !== action.id )
    default:
      return state
  }
}

