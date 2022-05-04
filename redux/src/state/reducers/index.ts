import { combineReducers } from 'redux';
import { repositoriesReducer } from './repositoryReducer';

export const reducers = combineReducers({
  repositories: repositoriesReducer,
});
