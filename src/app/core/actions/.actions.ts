import { Action } from '@ngrx/store';

export enum ActionTypes {
  Loads = '[] Loads'
}

export class Loads implements Action {
  readonly type = ActionTypes.Loads;
}

export type Actions = Loads;
