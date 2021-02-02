import { Action } from '@ngrx/store';


export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

// reducer(currentState, action) => newState
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  // this must be a PURE function
  // you cannot change the arguments in any way (state, or the action)
  // you can only produce a new value
  // You cannot do "side effects" here.
  //  - Side effects are things like calling APIs, changing a route, updating some other data, etc.

  switch (action.type) {
    case 'increment': {
      return {
        current: state.current + 1
      };
    }
    case 'decrement': {
      return {
        current: state.current - 1
      };
    }
    default:
      return state;
  }
}
