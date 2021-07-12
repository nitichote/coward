import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiChoteService } from './service/api-chote.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router,public ps:ApiChoteService) {
    
  }
  isLogin =this.ps.isLogin;
  title = 'coward';
  
  goLogin(){
    
      this.router.navigateByUrl('/login');

  }
  doLogout(){
this.ps.setLogout();
  }
}
