import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api'
@Component({
  selector: 'app-pass-new',
  templateUrl: './pass-new.component.html',
  styleUrls: ['./pass-new.component.scss']
})
export class PassNewComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  pass1="";
  pass2="";
  email="";
  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
}
  doCreatePass(){
   // this.pass1= this.pass1.trim();
   // this.pass2= this.pass2.trim();
if(this.pass1 == this.pass2 && this.pass1.length ==4){


}
else{
  this.messageService.clear();
  this.messageService.add({severity:'error', summary:'Service Message', detail:'Pincode ไม่ตรงกัน'});
}

  }
  ngOnInit(): void {
  }

}
