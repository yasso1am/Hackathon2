import axios from 'axios';
const MENUS = 'MENUS';
const MENU = 'MENU';

export const getMenus = () => {
  return(dispatch) => {
    axios.get('/api/menus')
    .then( res => {
      dispatch({ type: MENUS, menus: res.data, headers: res.data })
    })
  }
}

export const getMenu = (menu) => {
  return(dispatch) => {
    axios.get(`/api/${menu.id}`)
    .then (res => {
      dispatch({ type: MENU, menu: res.data, headers: res.data })
    })
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case MENUS:
      return action.menus
    case MENU:
      return action.menu
    default:
      return state;
  }
};

