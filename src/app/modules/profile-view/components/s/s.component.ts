import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-s',
  templateUrl: './s.component.html',
  styleUrls: ['./s.component.scss']
})
export class SComponent implements OnInit {

  evaluationform!: FormGroup; 
  display:any=[];

  constructor(private evaluation: FormBuilder) { }

  ngOnInit(): void {
    this.evaluationform = this.evaluation.group({
      company: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', Validators.required],
      // phone: ['', [Validators.required,Validators.pattern("[0-9 ]{12}")]],
      message: ['', Validators.required],
      password: ['',Validators.required]
    })
  }
  evaluationsubmit() {
    console.log(this.evaluationform.value);
  }
displayvalfun(){
  this.display=this.evaluationform.value;
}

}
