import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PtComponent } from './pt/pt.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
     },
     {
      path: 'pt',
      component:PtComponent
       },
       {
        path: 'setting',
        component:SettingComponent
         },
         {
          path: 'admin',
          loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
        },
        {
          path: 'login',
          loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
        },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
