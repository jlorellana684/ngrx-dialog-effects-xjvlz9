import { Action } from '@ngrx/store';

export enum ActionTypes {
  OpenDialog = 'Open dialog',
  CloseDialog = 'Close dialog',
  ResultDialog = 'Result dialog',
}

export class OpenDialog implements Action {
  readonly type = ActionTypes.OpenDialog;
}

export class CloseDialog implements Action {
  readonly type = ActionTypes.CloseDialog;
}

export class ResultDialog implements Action {
  readonly type = ActionTypes.ResultDialog;
  constructor(public payload: { animal: string }) { };
}

export type Actions =
  | OpenDialog
  | CloseDialog
  | ResultDialog;
