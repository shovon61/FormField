import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SetFormGroupValues } from 'src/app/modules/profile-view/models/setvalue';

@Component({
  selector: 'app-h',
  templateUrl: './h.component.html',
  styleUrls: ['./h.component.scss']
})
export class HComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

  newsCreateFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.newsCreateFormGroup = this.formBuilder.group({
      heading: ['', [Validators.required, Validators.maxLength(20)]],
      sortDescription: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.newsCreateFormGroup.valueChanges.subscribe((res) => {
      console.log(res, this.newsCreateFormGroup.valid);
    });
    const _fieldName = ['heading', 'sortDescription', 'description'];
    const _fieldData = ['heading', 'sortDescription', 'description'];
    SetFormGroupValues(this.newsCreateFormGroup, _fieldName, _fieldData);
  }
  onSubmitForm() {
    console.log(this.myControl.value);
    console.log(this.newsCreateFormGroup.value);
  }
  onSubmitForm2() {
    console.log(this.onSubmitForm());
    console.log(this.newsCreateFormGroup.value);
  }

}
