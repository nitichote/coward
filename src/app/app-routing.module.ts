import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PtComponent } from './pt/pt.component';

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
