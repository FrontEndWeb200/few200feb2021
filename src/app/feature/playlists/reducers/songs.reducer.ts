import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/song.actions';

export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album?: string;
}

export interface SongState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

// const initialState = adapter.getInitialState();
const initialState: SongState = {
  ids: ['a', 'b'],
  entities: {
    a: { id: 'a', title: 'Bring the Noize', artist: 'Public Enemy' },
    b: { id: 'b', title: 'C.R.E.A.M.', artist: 'Wu-Tang Clan', album: 'Enter the Wu-Tang' }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(actions.songAdded, (s, a) => adapter.addOne(a.payload, s))
);

export function reducer(state: SongState = initialState, action: Action): SongState {
  return reducerFunction(state, action);
}




