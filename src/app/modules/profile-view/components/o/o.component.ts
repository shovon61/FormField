import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o',
  templateUrl: './o.component.html',
  styleUrls: ['./o.component.scss']
})
export class OComponent {


    openNewTab(){
      window.open('/newtab');
    }
  

}
