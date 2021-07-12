import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as m from "../model/cowordmodel";


//-import * as CryptoJs from "crypto-js";
//import * as crypto from 'crypto-js';
@Injectable({
  providedIn: "root",
})
export class ApiChoteService {

  public isLogin = false;
  h!:m.Hospital36;
  getLogStatus(){


  }
  async getLogin(user:string,pass:string) {
    const url = this.api+"login";

    const body = { user:user,pass:pass };
    return await this.http.post(url, body).toPromise();
  }
  setLogin(){
    this.isLogin =true;
  }
  setLogout(){
    this.isLogin = false;
  }
  setLocal(o:m.Hospital36,isRemember:boolean) {
   let remember =isRemember;
    let x ={...o};
    const removeProp = 'pincode';

//const { [removeProp]: remove, ...rest } = x;
 
   
localStorage.setItem("myhos", JSON.stringify(x));
localStorage.setItem("remember", String(isRemember));
  }
  get getKey() {
    return "13";
  }

  get apiUrl() {
    return "http://203.157.182.16:3101";
  }

  get secretKey() {
    return "5bb4660ad4947af87cd38af5888b9eac";
  }

  constructor(private http: HttpClient) {}
  api = 'http://127.0.0.1:3000/coward/';
  async sqlName(sqlName: string) {
    const url = `${this.apiUrl}/getData`;
    const object = {
      sqlName,
      connKey: this.getKey,
    };
    const data = await this.encrypt(object);
    const body = {
      data,
    };
    const rs: any = await this.http.post(url, body).toPromise();

    const rows = await this.decrypt(rs.rows);
    const response = {
      ok: rs.ok,
      rows,
    };
    return response;
  }

  encrypt(data: any) {
   // const cipherText = CryptoJs.AES.encrypt(
   //   JSON.stringify(data),
   //   this.secretKey
  //  );
   // return cipherText.toString();
  }

  decrypt(enc: string) {
  //  const bytes = CryptoJs.AES.decrypt(enc, this.secretKey);
  //  const plainText = bytes.toString(CryptoJs.enc.Utf8);
  //  return JSON.parse(plainText.toString());
  }
 
  async getRout(r:string) {
    //const url =
   //   "https://dmfzero.com/apileaf/apis.php/dentalkpi/dentreporttemplate/hdc";
   
   let api2020 =  this.api+ r;

   return await this.http.get(api2020).toPromise();
  }
  async getTable(tbl:string) {
    //const url =
   //   "https://dmfzero.com/apileaf/apis.php/dentalkpi/dentreporttemplate/hdc";
   let api2020 =  this.api+ "table/"+tbl;
console.log(api2020);

   return await this.http.get(api2020).toPromise();
  }
  async getpts() {
    //const url =
   //   "https://dmfzero.com/apileaf/apis.php/dentalkpi/dentreporttemplate/hdc";
   let api2020 =  this.api+ "pts";

   return await this.http.get(api2020).toPromise();
  }
  async getpt1hos(hcode:string) {
    //const url =
   //   "https://dmfzero.com/apileaf/apis.php/dentalkpi/dentreporttemplate/hdc";
   let api2020 =  this.api+ "pts1hos/"+hcode;

   return await this.http.get(api2020).toPromise();
  }
  async insertData(tableName: string, formData: any) {
    const f = [];
    f.push(formData);
    const url = `${this.api}insert`;
    const data = {
      tableName,
      formData: f,
    };
    const body = {
      data,
    };

    const rs: any = await this.http.post(url, body).toPromise();

    return rs;
  }
  async insertUpdateData(tableName: string, whereName: any, formData: any) {
    const w = [];
    w.push(whereName);
    const f = [];
    f.push(formData);
    const url = `${this.api}insertUpdate`;
    const data = {
      tableName,
      whereName: w,
      formData: f,
    };
    const body = {
      data,
    };
     console.log(body);

    const rs: any = await this.http.post(url, body).toPromise();
    console.log(rs);

    return rs;
  }
  async deleteData(tableName: string, whereData: any) {
    const f = [];
    f.push(whereData);
    const url = `${this.api}del`;
    const data = {
      tableName,
      whereName: f,
    };
    const body = {
      data,
    };
    // console.log(body);

    const rs: any = await this.http.post(url, body).toPromise();
    return rs;
  }
}
