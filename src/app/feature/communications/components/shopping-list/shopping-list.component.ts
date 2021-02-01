import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from '../../models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  items: ShoppingListItem[] = [
    { id: '1', description: 'Beer', purchased: false },
    { id: '2', description: 'Ice Cream', purchased: true }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
