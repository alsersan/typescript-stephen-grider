import { Dispatch } from 'redux';
import { Action } from '../actions';
import { ActionTypes } from '../actionTypes';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.SEARCH_REPOSITORIES });

    try {
      const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=${term}`);
      const data = await res.json();
      const results = data.objects.map((el: any) => el.package.name);
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: results,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionTypes.SEARCH_REPOSITORIES_EROR,
          payload: err.message,
        });
      }
    }
  };
};
