import { Action } from '@ngrx/store';


export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

// reducer(currentState, action) => newState
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return state;
}
