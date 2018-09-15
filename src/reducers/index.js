import { combineReducers } from 'redux';
import money from './money';
import bank from './bank';
import induction from './induction';
import settings from './settings';
import user from './user';

export default combineReducers({
  money,
  bank,
  induction,
  settings,
  user
});
