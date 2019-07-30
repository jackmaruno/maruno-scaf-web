import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes } from '../actions/.actions';

@Injectable()
export class Effects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(ActionTypes.Loads));

  constructor(private actions$: Actions) {}  
}
