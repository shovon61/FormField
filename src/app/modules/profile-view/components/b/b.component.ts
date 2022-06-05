import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  constructor( private add : FormBuilder) { }

  ngOnInit(): void { }
  profileForm=this.add.group({
    firstName:[''],
    lastName:[''],
    address:['']
  })

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
