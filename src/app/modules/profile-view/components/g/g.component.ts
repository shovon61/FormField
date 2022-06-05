import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-g',
  templateUrl: './g.component.html',
  styleUrls: ['./g.component.scss']
})
export class GComponent implements OnInit {

  profile!: FormGroup;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private pro: FormBuilder) { }

  ngOnInit(): void {
    this.profile = this.pro.group({
      number: ['',Validators.required],
      select: ['',Validators.required],
      input: ['',Validators.required],
      textarea: ['',Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      address: this.pro.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });

    // this.profile=this.pro.group({
    //   number:[''],
    //   select:[''],
    //   input:[''],
    //   textarea:[''],

    // })
  }
  submit() {
    console.log(this.profile.value);
  }


}
