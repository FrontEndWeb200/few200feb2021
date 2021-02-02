import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (s) => ({ current: s.current + 1 })),
  on(actions.countDecremented, (s) => ({ current: s.current - 1 })),
  // on(actions.countReset, () => ({ current: 0 }))
  on(actions.countReset, () => initialState)
);
// reducer(currentState, action) => newState
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  // this must be a PURE function
  // you cannot change the arguments in any way (state, or the action)
  // you can only produce a new value
  // You cannot do "side effects" here.
  //  - Side effects are things like calling APIs, changing a route, updating some other data, etc.

  return myReducer(state, action);
}
