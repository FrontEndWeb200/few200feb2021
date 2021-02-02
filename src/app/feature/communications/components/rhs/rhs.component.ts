import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { tap, map, distinctUntilChanged, distinct } from 'rxjs/operators';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.scss']
})
export class RhsComponent implements OnInit, OnDestroy {


  isEven$: Observable<boolean>;
  message$: Observable<string>;
  message = '';
  sub: Subscription;
  constructor(private service: MessageService) { }

  ngOnInit(): void {
    this.message$ = this.service
      .getMessageObservable();

    this.isEven$ = this.service
      .getMessageObservable()
      .pipe(
        map(val => val.length % 2 === 0) // string -> boolean
      );

    this.sub = this.service
      .getMessageObservable()
      .pipe(
        tap(val => console.log(val))
      ).subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  doIt(): void {
    this.message = this.service.getMessage();
  }

}
