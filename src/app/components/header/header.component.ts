import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() message = 'Default Message';
  @Input() backgroundColor = 'blue';

  @Output() onHeaderClicked = new EventEmitter<{ message: string, when: string }>();
  constructor() { }

  ngOnInit(): void {
  }

  doIt(): void {
    this.onHeaderClicked.emit({ message: this.message, when: new Date().toISOString() });
  }
}
