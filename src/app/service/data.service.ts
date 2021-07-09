import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  //sdata={doctor:{},pt:{},tx:{}};
  doctor = {};
  pt = {};
  tx = {};
  dx = {};
  constructor() {}

  setDoctor(obj: any) {
    this.doctor = obj;
  }
  setPt(obj: any) {
    this.doctor = obj;
  }
  setTx(obj: any) {
    this.doctor = obj;
  }
  setDx(obj: any) {
    this.doctor = obj;
  }
  getValue() {
    return { doctor: this.doctor, pt: this.pt, tx: this.tx, dx: this.dx };
  }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
