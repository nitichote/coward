import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pt-add',
  templateUrl: './pt-add.component.html',
  styleUrls: ['./pt-add.component.scss']
})
export class PtAddComponent implements OnInit {

  constructor() { }
  @Input()
  pt:any={};
  @Output()
  acceptCookies = new EventEmitter();

  ptss:any={};
doSave(){

}
  ngOnInit(): void {
    console.log("pt=",this.pt);
    
  }

}
