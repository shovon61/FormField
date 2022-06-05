import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss']
})
export class DComponent implements OnInit {

  profile!:FormGroup;

  constructor( private sub:FormBuilder) { }

  ngOnInit(): void {
    this.profile=this.sub.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      address:['',Validators.required],
    })
  }
  work(){
    console.log(this.profile.value);
  }
}
