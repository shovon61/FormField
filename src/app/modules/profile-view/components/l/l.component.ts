import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-l',
  templateUrl: './l.component.html',
  styleUrls: ['./l.component.scss']
})
export class LComponent implements OnInit {

  profile!:FormGroup;

  constructor(private add: FormBuilder) { }

  ngOnInit(): void {
    this.profile=this.add.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      address:['',Validators.required]
    })
  
   }

  
  onclick(){
    console.log(this.profile.value)
  }

}
