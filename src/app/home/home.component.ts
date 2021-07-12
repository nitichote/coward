import { Component, HostListener, OnInit, TemplateRef } from '@angular/core';
import { ApiChoteService } from "../service/api-chote.service";
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { thLocale } from 'ngx-bootstrap/locale';
import { listLocales } from 'ngx-bootstrap/chronos';
import * as m from '../model/cowordmodel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private localeService: BsLocaleService,private modalService: BsModalService,private ps: ApiChoteService,) {
  }
hoss=[];
monththais=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
locale = 'th';
locales = listLocales();
selectedmonth=new Date().getMonth();
daycols!:number[];
today=new Date();
year=2021;
daybed=Array.from(Array(31).keys(), n => n + 1);
doSumPtinBed(hcode:string,selectdate:number){
const d1 = new Date(this.year,this.selectedmonth,selectdate);
const hosfilter = this.hoss.filter(x=>{
  return x['off_id']==hcode;
});
//console.log("hoss=",this.hoss);
//console.log("hosfilter =",hosfilter );

let total = 0;
for(let i=1;i < hosfilter.length;i++){

  let h = hosfilter[i];
total += this.getbedday(new Date(this.year,this.selectedmonth,selectdate),h['dischargedate']);
}
return total;
}
getbedday(d1:Date,d2:Date){
  let diffInMilliSeconds = (Number(d2) - Number(d1)) / 1000;
  const days = Math.floor(diffInMilliSeconds / 86400);
  let x=0;
if(days>0){
x = days;
}
return x;
}

getThaidate(d:string){
  let r="";
  let a = d.substr(0,10);
return a.substr(-2)+"-"+a.substr(5,2)+"-"+a.substr(0,4);
}
doSelectMonth(m:number){
  this.selectedmonth = m;
  console.log("m=",m);
  this.gendaycols(2021,this.selectedmonth);
}
gendaycols(year:number,month:number){
let d = this.getDaysInMonth(year,month);
this.daycols=Array.from(Array(d).keys(), n => n + 1)
   // console.log("daycols",this.daycols);
}
getDaysInMonth(year:number,month:number){
return new Date(year, month, 0).getDate(); 
}
arrHos:any=[];
ihos={hno:1,hname:"",hcode:""};
  ngOnInit(): void {
   
    this.gendaycols(2021,this.selectedmonth);
    this.localeService.use(this.locale);
    this.ps.getTable("hospital36").then((x:any) => {
      this.hoss = x["message"];
      this.hoss.forEach((k,i)=>{
        this.ihos.hcode=k['off_id'];
        this.ihos.hname=k['off_name'];
        this.ihos.hno = i;
this.arrHos.push(this.ihos);

      });
 //let xx = this.hoss.map((x,i)=>{x.ss =i;});
    //  console.log(this.hoss);
     const arr = Array.from(Array(this.hoss.length), () => Array(31).fill(0))
console.log("arr =",arr)  

    });
  }

}
