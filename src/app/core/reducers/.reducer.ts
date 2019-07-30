import { Action } from '@ngrx/store';
import { Actions, ActionTypes } from '../actions/.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    case ActionTypes.Loads:
      return state;


    default:
      return state;
  }
}
