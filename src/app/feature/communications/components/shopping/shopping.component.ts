import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from '../../models';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {



  stuff: ShoppingListItem[] = [
    { id: '1', description: 'Beer', purchased: false },
    { id: '2', description: 'Shampoo', purchased: true }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
