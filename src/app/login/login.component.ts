import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { ApiChoteService } from '../service/api-chote.service';
import * as m from '../model/cowordmodel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private ps:ApiChoteService,private router:Router) { }
txtUser="";
txtPass="";
isRemember=false;
  doLogin(){
    this.txtUser=this.txtUser.trim();
    this.txtPass=this.txtPass.trim();
    if(this.txtUser.length != 5 && this.txtPass.length < 4){
     
      this.errormessage="ท่านป้อน username หรือ pincode ไมม่ถูกต้อง กรุณาลองใหม่อีกครั้ง"; 
    }else{

      this.ps.getLogin( this.txtUser,this.txtPass).then((x:any) => {
        let ss:any=[];
        ss= x["message"];
       if(ss.length>0){
         this.errormessage = "";
        this.ps.setLogin();
        this.ps.setLocal(ss[0],this.isRemember);
        this.router.navigateByUrl('/pt');
         
       }else{
        
         this.errormessage="ท่านป้อน username หรือ pincode ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง"+
        " <span><i class='fas fa-sad-tear fa-x'></i></span>";
       }        
      });
    }
  
    this.router.navigateByUrl('/login');
}
hoss=[];
hos!:m.Hospital36;
errormessage="";
ngOnInit(): void {
   let res:any;

  if (localStorage.getItem('myhos')) { 
    const myItem:any = localStorage.getItem('myhos');
    let remember = localStorage.getItem('remember');
    console.log(myItem);
    res= JSON.parse(myItem);
   if(remember=="true"){
 this.txtUser = res.off_id;
this.txtPass = res.pincode;
   }
   
    
    // this.officecode = u.officecode;
  } 
  console.log(res);
  
  this.ps.getTable("hospital36").then((x:any) => {
    this.hoss = x["message"];
    console.log(this.hoss);
    
  });
  
}
}
