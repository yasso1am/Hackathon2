import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import menu from './menu';
import foods from './foods';

const rootReducer = combineReducers({
  user,
  flash,
  menu,
  foods,
});

export default rootReducer;
