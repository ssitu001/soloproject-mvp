//combine reducers
import { combineReducers } from 'redux';
import UnitReducer from './reducer_units';
import ActiveUnit from './reducer_active_unit'

const rootReducer = combineReducers({
  units: UnitReducer,
  activeUnit: ActiveUnit 
})

module.exports = rootReducer;