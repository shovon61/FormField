import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  //  constructor() { }
   ngOnInit(): void { 
     this.getNews().subscribe(res => {
       console.log(res)
     })
   }

   submitNews() {
     this.addNews().subscribe(res => {
       console.log(res);
     })
   }

   getNews(): Observable<any>  {
     return this.http.get('http://localhost:4000/news/3');
   }
   addNews(): Observable<any> {
     const data = {
        Headline: 'third headline',
        SortDescription: 'third sort description',
        LongDescription: 'third long description',
        PostedBy: [1]
      }
      return this.http.post('http://localhost:4000/news', data);
   }

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
  // constructor ( private add: FormBuilder, private http: HttpClient) {}
  // profileForm = this.add.group({
  //   firstName: ['',Validators.required],
  //   lastName: [''],
  //   address: this.add.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),
  // });

  // onSubmit() {
  //     console.warn(this.profileForm.value);  }

  // onSubmit() {
  //   console.warn(this.profileForm.value);
  // }

  constructor ( private add: FormBuilder, private http: HttpClient) {}
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
