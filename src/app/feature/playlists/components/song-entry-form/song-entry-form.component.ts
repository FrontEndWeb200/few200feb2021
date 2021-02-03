import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-song-entry-form',
  templateUrl: './song-entry-form.component.html',
  styleUrls: ['./song-entry-form.component.scss']
})
export class SongEntryFormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
      album: ['']
    });
  }

  get title(): AbstractControl { return this.form.get('title'); }
  get artist(): AbstractControl { return this.form.get('artist'); }
  submit(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      // dispatch an action!
    }
  }
}
