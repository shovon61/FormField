import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {

  profile!:FormGroup;

  constructor(private add: FormBuilder) { }

  ngOnInit(): void {
    this.profile=this.add.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      address:['',Validators.required]
    })
  
   }

  
  submit(){
    console.log(this.profile.value)
  }

}
