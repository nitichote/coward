import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiChoteService } from "../service/api-chote.service";
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { thLocale } from 'ngx-bootstrap/locale';
import { listLocales } from 'ngx-bootstrap/chronos';
defineLocale('th', thLocale);
@Component({
  selector: 'app-pt',
  templateUrl: './pt.component.html',
  styleUrls: ['./pt.component.scss']
})
export class PtComponent implements OnInit {
  modalRef!: BsModalRef;
  constructor(private localeService: BsLocaleService,private modalService: BsModalService,private ps: ApiChoteService,) { }
  locale = 'th';
  locales = listLocales();
pts:any=[];
pt:any={};
pedit:any;
today=Date.now();
admit = new Date();
discharge= new Date();
action="add";
getdaydiff(s1:string,s2:string){
let d1:Date = new Date(s1);
let d2:Date = new Date(s2);
  let diffInMilliSeconds = (Number(d2) - Number(d1)) / 1000;
  const days = Math.floor(diffInMilliSeconds / 86400);
diffInMilliSeconds -= days * 86400;
return days;
}
doSave(){
  console.log("save"
  );
  
  if(this.action=="add"){
  console.log(this.pt,this.action);
  
  
  }else{
  
    console.log(this.pt,this.action);
  }
  
  }
doAdd(template: TemplateRef<any>,p:any){
  this.action="add";
  this.openModal(template,p);
};
doEdit(template: TemplateRef<any>,p:any){
  this.action ="edit";
  this.openModal(template,p);
}
openModal(template: TemplateRef<any>,p:any) {
  console.log(p);
  let d = String(p.admitdate).substr(0,10);
  let d2 = String(p.dischargedate).substr(0,10);
 this.admit = new Date(d);
 this.discharge = new Date(d2);
  this.pt =p;
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
    this.pt['hn']="";
    this.pt['admitdate']=  new Date().toISOString().split('T')[0];
    this.admit = new Date();
    let days = 14;
var newDate = new Date(Date.now() + days * 24*60*60*1000);
  //  this.discharge =this.admit.setDate(this.admit.getDate() + 14); 
  this.discharge =newDate;
  console.log(newDate);
  
    this.pt['dischargedate']= this.pt.dob = new Date().toISOString().split('T')[0];
    console.log(this.pt);
    this.ps.getpts().then((x:any) => {
      this.pts = x["message"];
      console.log(this.pts);
      this.localeService.use(this.locale);
      
    });
  }

}
