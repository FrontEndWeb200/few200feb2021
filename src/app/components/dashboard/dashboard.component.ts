import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { ShoppingDataService } from 'src/app/feature/communications/services/shopping-data.service';
import { CounterDashboard, ShoppingDashboard } from 'src/app/models';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState, selectCounterDashboard } from 'src/app/reducers';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  stuff$: Observable<ShoppingDashboard>;
  counterStuff$: Observable<CounterDashboard>;
  constructor(
    private store: Store<AppState>,
    private shoppingService: ShoppingDataService) { }

  ngOnInit(): void {

    this.counterStuff$ = this.store.select(selectCounterDashboard);
    this.stuff$ = this.shoppingService.getObservable()
      .pipe(
        map(items => {
          return {
            totalItems: items.length,
            purchasedItems: items.filter(i => i.purchased === true).length,
            unpurchasedItems: items.filter(i => i.purchased === false).length
          } as ShoppingDashboard;
        })
      );
  }

}
