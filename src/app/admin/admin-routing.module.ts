import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HosComponent } from './hos.component';
import { MainComponent } from './main.component';
import { PersonComponent } from './person.component';
import { PincodeComponent } from './pincode.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'pincode',
  component: PincodeComponent
  },
  { path: 'person',
  component: PersonComponent
  },
      { path: 'hos',
  component: HosComponent
  },
    ]
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
