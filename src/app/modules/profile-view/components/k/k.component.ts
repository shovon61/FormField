import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-k',
  templateUrl: './k.component.html',
  styleUrls: ['./k.component.scss']
})
export class KComponent implements OnInit {

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

  evaluationsubmit(data:NgForm) {
    console.log(this.evaluationform.value);
    this.display=data;
  }


}
