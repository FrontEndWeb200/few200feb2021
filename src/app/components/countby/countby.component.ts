import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { countBySet } from 'src/app/actions/counter.actions';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-countby',
  templateUrl: './countby.component.html',
  styleUrls: ['./countby.component.scss']
})
export class CountbyComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  countBy(by: number): void {
    this.store.dispatch(countBySet({ by }));
  }

}
