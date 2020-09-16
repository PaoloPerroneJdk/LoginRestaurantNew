import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiderHomePage } from './rider-home.page';

const routes: Routes = [
  {
    path: '',
    component: RiderHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiderHomePageRoutingModule {}
