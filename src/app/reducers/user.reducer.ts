import { Actions } from '../actions'

export interface State {
  name: string
};

const initialState = {
  name: '',
};

export function reducer(state: State = initialState, action: Actions) {
  return state;
}

export const getUserName = (state: State) => state.name;
