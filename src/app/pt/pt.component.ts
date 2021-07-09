import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiChoteService } from "../service/api-chote.service";

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-pt',
  templateUrl: './pt.component.html',
  styleUrls: ['./pt.component.scss']
})
export class PtComponent implements OnInit {
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService,private ps: ApiChoteService,) { }
pts:any=[];
pt:any;
pedit:any;
today=Date.now();
getdaydiff(s1:string,s2:string){
let d1:Date = new Date(s1);
let d2:Date = new Date(s2);
  let diffInMilliSeconds = (Number(d2) - Number(d1)) / 1000;
  const days = Math.floor(diffInMilliSeconds / 86400);
diffInMilliSeconds -= days * 86400;
return days;
}
openModal(template: TemplateRef<any>,p:any) {
  console.log(p);
  this.pedit =p;
  this.modalRef = this.modalService.show(template);
}
getTodayStatus(s2:string)
{
  let d2:Date = new Date(s2);
  let diffInMilliSeconds = (Number(d2) - Number(this.today)) / 1000;
  const days = Math.floor(diffInMilliSeconds / 86400);
diffInMilliSeconds -= days * 86400;
let res ="";
if(days <0){
  res= "Dischargeแล้ว";
}
if(days ==0){
  res= "Dischargeวันนี้";
}
if(days >0){
  res= "เหลืออีก"+String(days) +" วัน";
}
return res;
}
getThaidate(d:string){
  let a = d.substr(0,10);
return a.substr(-2)+"-"+a.substr(5,2)+"-"+a.substr(0,4);
}
  ngOnInit(): void {
    this.ps.getpts().then((x:any) => {
      this.pts = x["message"];
      console.log(this.pts);
      
    });
  }

}
