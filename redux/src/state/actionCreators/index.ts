import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Action } from '../actions';
import { ActionTypes } from '../actionTypes';
import { RootState } from '../reducers';

export const searchRepositories = (
  term: string
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
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
