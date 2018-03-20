import {combineReducers} from 'redux';
import divisionsReducer from './divisions-reducer';
import tournamentsReducer from './tournaments-reducer';

export default combineReducers(
  {
    divisions: divisionsReducer ,
    tournaments: tournamentsReducer ,
  }
);