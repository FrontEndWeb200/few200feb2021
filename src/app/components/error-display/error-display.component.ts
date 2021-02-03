import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, ObservableInput } from 'rxjs';
import { applicationErrorCleared } from 'src/app/actions/app.actions';
import { AppState, selectErrorMessage, selectHasError } from 'src/app/reducers';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent implements OnInit {

  hasError$: Observable<boolean>;
  errorMessage$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.hasError$ = this.store.select(selectHasError);
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }

  dismiss(): void {
    this.store.dispatch(applicationErrorCleared());
  }
}
