import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main.component';
import { HosComponent } from './hos.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {DropdownModule} from 'primeng/dropdown';
import { AmpPipe,TambonPipe } from '../pipe/area.pipe';
import { PincodeComponent } from './pincode.component';
import { PersonComponent } from './person.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    MainComponent,
    HosComponent,AmpPipe,TambonPipe, PincodeComponent, PersonComponent
  ],
  imports: [HttpClientModule,FormsModule,
    CommonModule,
    AdminRoutingModule, BsDatepickerModule.forRoot(),
    HttpClientModule,CommonModule ,DropdownModule,TableModule,
    BsDropdownModule.forRoot()
  ],
  providers: [BsDatepickerConfig],
})
export class AdminModule { }
