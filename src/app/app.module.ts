import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PtComponent } from './pt/pt.component';
import { ThaiDatePipe } from './pipe/thaidate.pipe';
import { PtAddComponent } from './pt/pt-add.component';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { SettingComponent } from './setting/setting.component';
import { AdminComponent } from './admin/admin.component';
import { HosComponent } from './hos/hos.component';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [ThaiDatePipe,
    AppComponent,
    HomeComponent,PtComponent, PtAddComponent, SettingComponent, AdminComponent, HosComponent, 
   
  ],
  imports: [BrowserAnimationsModule,TableModule,
    BrowserModule,
    AppRoutingModule, FormsModule, BsDatepickerModule.forRoot(),
    BsDropdownModule,
    HttpClientModule,CommonModule ,ModalModule
  ],
  providers: [MessageService,BsDatepickerConfig, BsDropdownConfig,BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
