import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, Action, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  map,
  switchMap,
  withLatestFrom,
  flatMap
} from 'rxjs/operators';

import { ActionTypes, OpenDialog, CloseDialog, ResultDialog } from '../actions'
import { State, getUserName } from '../reducers'
import { Dialog } from '../components/dialog.component'


@Injectable()
export class UserEffects {
  @Effect()
  openDialog = this.actions.pipe(
    ofType<OpenDialog>(ActionTypes.OpenDialog),
    withLatestFrom(this.store.pipe(select(getUserName))),
    flatMap(([_, username]) => {
      let dialogRef = this.dialog.open(Dialog, {
        data: { name: username, animal: '' }
      });
      return dialogRef.afterClosed();
    }),
    map((result: string) => {
      if (result === undefined) {
        return new CloseDialog();
      }

      return new ResultDialog({ animal: result });
    })
    ,
  )

  constructor(
    private actions: Actions,
    private store: Store<State>,
    private dialog: MatDialog
  ) { }
}
