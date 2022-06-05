import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-f',
  templateUrl: './f.component.html',
  styleUrls: ['./f.component.scss']
})
export class FComponent implements OnInit {

  options!:['One', 'Two', 'Three'];
  myControl = new FormControl();
   //options: string[] = ['One', 'Two', 'Three'];

  profile!:FormGroup;

  constructor(private add: FormBuilder) { }

  ngOnInit(): void {
    this.profile=this.add.group({
     // options:[''],
     //options:['',Validators.required],
      fname:['',Validators.required],
      lname:['',Validators.required],
      address:['',Validators.required],
      
    })
  
   }

  
  submit(){
    // console.log(this.myControl.value);
    console.log(this.profile.value);
   
  }


}
