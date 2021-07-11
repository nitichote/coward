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
  doLogin(){
    this.txtUser=this.txtUser.trim();
    this.txtPass=this.txtPass.trim();
    if(this.txtUser.length != 5 && this.txtPass.length < 4){
      console.log("ไม่สามารถแสดงได้");
      
    }else{

      this.ps.getLogin( this.txtUser,this.txtPass).then((x:any) => {
        let ss:any=[];
        ss= x["message"];
       if(ss.length>0){
         console.log(ss);
         if(this.txtUser==this.txtPass){
           console.log("redirect");
           
          this.router.navigateByUrl('/login/passnew');
         }

         
       }else{
         console.log("ไม่พบ");
         
       }        
      });
    }
  
    this.router.navigateByUrl('/login');
}
hoss=[];
hos!:m.Hospital36;
ngOnInit(): void {
 
  this.ps.getTable("hospital36").then((x:any) => {
    this.hoss = x["message"];
    console.log(this.hoss);
    
  });
  
}
}
