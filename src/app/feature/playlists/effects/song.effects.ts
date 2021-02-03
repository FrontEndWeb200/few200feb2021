import { Injectable } from '@angular/core';
import * as actions from '../actions/song.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlaylistDataService } from '../services/PlaylistDataService';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class SongEffects {

  // actions.loadSongs => loadSongsSucceeded || loadSongsFailed
  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSongs),
      switchMap(() => this.service.getAll()
        .pipe(
          map(response => actions.loadSongsSucceeded({ payload: response }))
        )
      )
    )
    , { dispatch: true });

  constructor(
    private actions$: Actions,
    private service: PlaylistDataService, // todo: set up a provider
  ) { }
}
