import * as fromSongs from './songs.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

export const featureName = 'playlistFeature';
import * as models from '../models';
export interface PlaylistState {
  songs: fromSongs.SongState;
}

export const reducers: ActionReducerMap<PlaylistState> = {
  songs: fromSongs.reducer
};

// 1. Feature Selector
const selectFeature = createFeatureSelector<PlaylistState>(featureName);
// 2. One per branch of the state (so songs...)
const selectSongsBranch = createSelector(
  selectFeature,
  f => f.songs
);
// 3. Helpers
const { selectAll: selectSongArray } = fromSongs.adapter.getSelectors(selectSongsBranch);

// 4. What you components need

// TODO: We need one that returns a SongSummaryItem[] for our song list component.

export const selectSongListModel = createSelector(
  selectSongArray,
  songs => songs.map(song => {
    return {
      ...song,
      isSaved: !song.id.startsWith('TEMP')
    } as models.SongSummaryModel;
  })
);
