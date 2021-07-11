import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { PassNewComponent } from './pass-new.component';

const routes: Routes = [

  {
    path: '',
    component:LoginComponent,
  },
      {
        path: 'passnew',
        component: PassNewComponent
         
        } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
