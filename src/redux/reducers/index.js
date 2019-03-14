import { combineReducers } from 'redux';
import roomsReducer from './roomsReducer';

const reducer = combineReducers({
  roomsData: roomsReducer,
});

export default reducer;
