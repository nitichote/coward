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
lab=new Date();
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
  console.log("save");
  if(this.action=="add"){
  console.log(this.pt,this.action);
  }else{
    console.log(this.pt,this.action);
  }
 //this.pt.ptcode="aaaasaa";
  this.pt.admitdate = this.admit.toISOString().split('T')[0];
  this.pt.labdate = this.lab.toISOString().split('T')[0];
  this.pt.dischargedate = this.discharge.toISOString().split('T')[0];
console.log(this.pt);
let c = {...this.pt};
//console.log(this.dobdate.toISOString().split('T')[0]);
this.ps.insertUpdateData("pt","dd",this.pt)
//Object.assign(c, {key3: "value3"});
//console.log(c);
  }
doAdd(template: TemplateRef<any>,p:any){
  this.action="add";
  this.admit = new Date();
     
var newDate = new Date(Date.now() + this.days * 24*60*60*1000);
this.discharge =newDate;
this.admit = new Date();
this.lab = new Date();
  console.log("admit",this.admit);
  console.log("discharge",this.discharge);
  this.openModal(template,p);
};
onChange(e:Date){
  console.log("on change",e);
  console.log("labdate",this.lab);
  
}
doChangeDate(e:Date){
 // console.log(this.lab);
 // console.log(e);
 this.calDischarge(e);

}
doEdit(template: TemplateRef<any>,p:any){
  this.action ="edit";
  this.openModal(template,p);
  let d2 = String(p.dischargedate).substr(0,10);
  this.discharge = new Date(d2);
  let d = String(p.admitdate).substr(0,10);
   let d3 = String(p.labdate).substr(0,10);
  this.lab = new Date(d3);
 this.admit = new Date(d);
}
openModal(template: TemplateRef<any>,p:any) {
  console.log(p);
  

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
  let r="";
 // if(is)
  let a = d.substr(0,10);
return a.substr(-2)+"-"+a.substr(5,2)+"-"+a.substr(0,4);
}
days=14;
calDischarge(sdate:Date){
  
var newDate = new Date(Number(sdate) + this.days * 24*60*60*1000);
  this.discharge =newDate;
 //console.log("next",newDate);
}
  ngOnInit(): void {
    this.pt['hn']="";
    this.pt['labdate']=  new Date().toISOString().split('T')[0];
    this.pt['admitdate']=  new Date().toISOString().split('T')[0];
    this.lab = new Date();
    this.admit = new Date();
   this.calDischarge(new Date());

  
    this.pt['dischargedate']=  new Date().toISOString().split('T')[0];
    console.log(this.pt);
    this.ps.getpts().then((x:any) => {
      this.pts = x["message"];
      console.log(this.pts);
      this.localeService.use(this.locale);
      
    });
  }

}
