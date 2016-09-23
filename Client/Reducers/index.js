//combine reducers
import { combineReducers } from 'redux';
import UnitReducer from './reducer_units';

const rootReducer = combineReducers({
  units: UnitReducer
})

module.exports = rootReducer;