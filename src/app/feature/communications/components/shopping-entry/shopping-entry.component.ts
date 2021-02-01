import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-entry',
  templateUrl: './shopping-entry.component.html',
  styleUrls: ['./shopping-entry.component.scss']
})
export class ShoppingEntryComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      item: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    const message = this.form.valid ? 'It is valid' : 'It is not valid';
    console.log(message);
    console.log(this.form.value);
  }
}
