import { createAction, props } from '@ngrx/store';
import { SongEntity } from '../reducers/songs.reducer';


let currentId = 1;
export const songAdded = createAction(
  '[playlists songs] song added request',
  ({ title, artist, album }: { title: string, artist: string, album?: string }) => ({
    payload: {
      id: 'TEMP' + currentId++,
      title,
      artist,
      album
    } as SongEntity
  })
);

// "Initiating Action"
export const loadSongs = createAction(
  '[playlists songs] load the songs from the api'
);

// Win!
export const loadSongsSucceeded = createAction(
  '[playlists songs] loading the songs succeeded',
  props<{ payload: SongEntity[] }>()
);

// Lose!
export const loadSongsFailed = createAction(
  '[playlists songs] loading the songs failed',
  props<{ errorMessage: string }>()
);
