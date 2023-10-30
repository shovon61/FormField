import { Component, OnInit } from '@angular/core';
import { Icountry } from '../../models/country';

@Component({
  selector: 'app-m',
  templateUrl: './m.component.html',
  styleUrls: ['./m.component.scss']
})
export class MComponent implements OnInit {

  countryList:Icountry[] = [
    new Icountry("1", "Banglasdesh"),
    new Icountry('2', 'USA'),
    new Icountry('3', 'England'),
    new Icountry('4','India'),
    new Icountry('5','Canada'),
    new Icountry('6', "South Africa"),
    new Icountry('7', 'Newzeland'),
    new Icountry('8', 'Srilanka'),
    new Icountry('9','Pakisthan'),
  ];

  constructor() { }

  ngOnInit(): void { }
  onSubmit(contactForm:any) {
    console.log(contactForm.value);
  }

}
