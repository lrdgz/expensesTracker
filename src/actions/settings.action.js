import { ADD_CATEGORY } from '../constants/ActionTypes';

export const addCategory = (name) => ({
  type: ADD_CATEGORY,
  name
});
