import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss']
})
export class EComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  user :any;
  profile!:FormGroup;
 

  constructor(private add: FormBuilder) { }

  ngOnInit(): void {
    this.profile=this.add.group({
      //options:['one','two','three','four'],
      fname:['',Validators.required],
      lname:['',Validators.required],
      address:['',Validators.required],
      // get lname(){
      //   return this['profile'].get('lname') as FormControl;}
    })
  
   }

  
  submit(){
    console.log(this.myControl.value);
    console.log(this.profile.value);
    this.user=Object.assign(this.user, this.profile.value);
    localStorage.setItem('users',  JSON.stringify(this.user));
   
  }


}
