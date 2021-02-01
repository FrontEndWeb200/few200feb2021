import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationsComponent } from './communications.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEntryComponent } from './components/shopping-entry/shopping-entry.component';



@NgModule({
  declarations: [CommunicationsComponent, ShoppingComponent, ShoppingListComponent, ShoppingEntryComponent],
  imports: [
    CommonModule
  ],
  exports: [CommunicationsComponent]
})
export class CommunicationsModule { }
