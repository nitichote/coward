import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiChoteService } from "../service/api-chote.service";
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { thLocale } from 'ngx-bootstrap/locale';
import { listLocales } from 'ngx-bootstrap/chronos';
import * as m from '../model/cowordmodel';

defineLocale('th', thLocale);
@Component({
  selector: 'app-hos',
  templateUrl: './hos.component.html',
  styleUrls: ['./hos.component.scss']
})
export class HosComponent implements OnInit {

  modalRef!: BsModalRef;
  constructor(private localeService: BsLocaleService,private modalService: BsModalService,private ps: ApiChoteService,) {
      }
  locale = 'th';
  locales = listLocales();
  hoss:any=[];
//hos:any={};
dob=new Date();
today=Date.now();
  h: m.Hospital36 ={};
  action="add";
 address="";
 pvs=[{pvcode:"36",pvname:"ชัยภูมิ"},{pvcode:"30",pvname:"นครราชสีมา"},{pvcode:"31",pvname:"บุรีรัมย์"},{pvcode:"32",pvname:"สุรินทร์"}];
getThaidate(d:string){
  let r="";
  let a = d.substr(0,10);
return a.substr(-2)+"-"+a.substr(5,2)+"-"+a.substr(0,4);
}
  doSave(){
    console.log("save");
    if(this.action=="add"){
   console.log(this.h,this.action);
    }else{
//      console.log(this.h,this.action);
    }
   //this.pt.ptcode="aaaasaa";
    this.h.dob = this.dob.toISOString().split('T')[0];
 
  console.log(this.h);
  let c = {...this.h};
  //console.log(this.dobdate.toISOString().split('T')[0]);
  this.ps.insertUpdateData("hospital36","dd",this.h)
  //Object.assign(c, {key3: "value3"});
  //console.log(c);
    }
  doAdd(template: TemplateRef<any>,p:any){
    this.h={};
    this.h.pvcode=this.pvcode;
    this.h.ampcode=this.pvcode+"01";
    this.h.tamboncode=this.pvcode+"0101";
    this.action="add";
    this.dob = new Date();
    this.h.hossector ="โรงพยาบาลสนามจังหวัด";   
    this.h.off_name="ssssss";
    console.log(this.h);
    
    this.openModal(template,this.h);
  };
  doEdit(template: TemplateRef<any>,p:any){
    this.action ="edit";
    this.openModal(template,p);

    let d = String(p.dob).substr(0,10);
   this.dob = new Date(d);
  }
    hossectors:any=[];

  openModal(template: TemplateRef<any>,p:any) {
    console.log(p);
    

    this.h =p;
    this.modalRef = this.modalService.show(template);
  }
  amps=[];
  ampfilters=[];
  tambons=[];
  tbfilters=[];
  pvcode='36';
  ampcode="";
onPvchange(e:any){
this.pvcode=e.value;
this.ampfilters= this.amps.filter(y=>String(y['ampcode']).substr(0,2)==this.pvcode);
this.ampcode = this.pvcode+'01';
this.tbfilters= this.tambons.filter(y=>String(y['tbid']).substr(0,4)==this.ampcode);
}
onAmpchange(e:any){
this.ampcode = e.value;
this.tbfilters= this.tambons.filter(y=>String(y['tbid']).substr(0,4)==this.ampcode);
}
  ngOnInit(): void {
    this.localeService.use(this.locale);
    this.ps.getTable("hospital36").then((x:any) => {
      this.hoss = x["message"];
      console.log(this.hoss);
      
    });
    this.ps.getTable("c_hossector").then((x:any) => {
      this.hossectors = x["message"];
    });
    this.ps.getTable("ampr9").then((x:any) => {
      this.amps = x["message"];
      this.ampfilters= this.amps.filter(y=>String(y['ampcode']).substr(0,2)==this.pvcode);
     
    });
    this.ps.getTable("tambonr9").then((x:any) => {
      this.tambons = x["message"];
    });
  }

}
