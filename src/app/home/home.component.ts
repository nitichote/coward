import { Component, HostListener, OnInit, TemplateRef } from '@angular/core';
import { ApiChoteService } from '../service/api-chote.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { thLocale } from 'ngx-bootstrap/locale';
import { listLocales } from 'ngx-bootstrap/chronos';
import * as m from '../model/cowordmodel';
import { createHostListener } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private localeService: BsLocaleService,
    private modalService: BsModalService,
    private ps: ApiChoteService
  ) {}
  hoss = [];
  monththais = [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ย.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.',
  ];
longThaiMonth = [
    'มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
    'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'
    ]; 
    thaimonthfull ="";
  locale = 'th';
  locales = listLocales();
  selectedmonth = new Date().getMonth();
  daycols!: number[];
  today = new Date();
  year = 2021;
  todaymonth = new Date().getMonth();
  daybed = Array.from(Array(31).keys(), (n) => n + 1);
  selectSector="";
  selectAmp="";
  getThaidate(d: string) {
    let r = '';
    let a = d.substr(0, 10);
    return a.substr(-2) + '-' + a.substr(5, 2) + '-' + a.substr(0, 4);
  }

  doSumPtinBed(hcode: string, selectdate: number,bed:number) {
    //this.selectedmonth=6;
    let mmm  =this.selectedmonth;//-1;
    let ddd = this.year+"-"+ String(mmm) + "-"+String(selectdate);
    const d1 = new Date(ddd);
    //console.log("d1=",d1);
    
    const ptfilter = this.pts.filter((p) =>p['hcode'] == hcode);
    let total = 0;
    ptfilter.forEach(e => {
     let cnt=0;
     if( d1 >= new Date(e['admitdate']) && d1 <new Date(e['dischargedate']))
     {cnt=1 ;}
      total += cnt;
    });
  //console.log("total",hcode,d1,total);
   return bed - total;
   //return this.selectedmonth;
  }

  doSelectMonth(m: number) {
    this.thaimonthfull =this.longThaiMonth[m-1];
this.selectedmonth = m;
this.gendaycols(2021, this.selectedmonth);
    }
  gendaycols(year: number, month: number) {
    let d = this.getDaysInMonth(year, month);
    this.daycols = Array.from(Array(d).keys(), (n) => n + 1);
      }
  getDaysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
  }
  arrHos: any = [];
  arrResult: any = [];
  ihos = { hno: 1, hname: '', hcode: '' };
  pts=[];
  hossectors=[];
  hossectorfilter=[];
  amps=[];
  amps36:any=[];
  ampfilter=[];
  onSectorchange(e:any){


  }
  onAmpchange(e:any){


  }
  ngOnInit(): void {
   // console.log("ddd=",new Date().getMonth());
   this.thaimonthfull =this.longThaiMonth[this.selectedmonth];
   this.ps.getTable('c_hossector').then((t: any) => {
    this.hossectors = t['message'];
   });
   this.ps.getTable('ampr9').then((t: any) => {
    this.amps = t['message'];
    this.amps36=this.amps.filter(a=>String(a['ampcode']).substr(0,2)=='36')
   });
    this.ps.getTable('pt').then((t: any) => {
      this.pts = t['message'];
            this.ps.getTable('hospital36').then((x: any) => {
            this.hoss = x['message'];
            this.hoss.forEach((k, i) => {
              this.ihos.hcode = k['off_id'];
              this.ihos.hname = k['off_name'];
              this.ihos.hno = i;
              this.arrHos.push(this.ihos.hcode);
          
      });

    

    });

    this.doSelectMonth(this.selectedmonth+1) ;
   
    this.localeService.use(this.locale);

      //let xx = this.hoss.map((x,i)=>{x.ss =i;});
      //  console.log(this.hoss);
      this.arrResult = Array.from(Array(17), () =>
        Array(31).fill(0)
      );
    //  console.log('this.arrResult =', this.arrResult[0][0]);
    });
  }
}
