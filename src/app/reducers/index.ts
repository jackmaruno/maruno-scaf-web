import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';  

export interface State {
  router: fromRouter.RouterReducerState;    
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer, 
};

export const metaReducers: MetaReducer<State>[] = [];
