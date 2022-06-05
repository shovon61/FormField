import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent /*implements OnInit*/ {

  //  constructor() { }
  //  ngOnInit(): void { }

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  // onSubmit() {
  //   console.warn(this.profileForm.value);
  // }

  constructor ( private add: FormBuilder) {}
  profileForm = this.add.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.add.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  onSubmit() {
      console.warn(this.profileForm.value);  }
}
