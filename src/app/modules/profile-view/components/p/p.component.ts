import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p',
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.scss']
})
export class PComponent {

  onbacktoapp(){
    window.close();
  }
  openNewTab1(){
    window.open('/newtab');
  }

}
