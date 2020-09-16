import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiderHomePageRoutingModule } from './rider-home-routing.module';

import { RiderHomePage } from './rider-home.page';
import { RiderTabComponent } from '../tabs/rider-tab/rider-tab.component';
import { HeaderRiderComponent } from '../headers/header-rider/header-rider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiderHomePageRoutingModule
  ],
  declarations: [RiderHomePage,
  RiderTabComponent,
HeaderRiderComponent]
})
export class RiderHomePageModule {}
