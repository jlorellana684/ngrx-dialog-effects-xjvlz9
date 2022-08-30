import { Actions, ActionTypes } from '../actions'

export interface State {
  animal: string
};

const initialState = {
  animal: '',
};

export function reducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ResultDialog:
      return {
        ...state,
        animal: action.payload.animal
      }
    default:
      return state;
  }
}

export const getAnimal = (state: State) => state.animal;
