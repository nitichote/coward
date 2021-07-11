import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { PassNewComponent } from './pass-new.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    LoginComponent,
    PassNewComponent
  ],
  imports: [
    CommonModule,FormsModule,ShareModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
