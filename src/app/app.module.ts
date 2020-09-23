import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { RiderHomePage } from "./components/rider/rider-home/rider-home.page";
import { RiderFormPage } from "./components/rider/rider-form/rider-form.page";
import { LoginPage } from "./components/login/login.page";
import { RestorauntFormComponent } from './components/restoraunt/restoraunt-form/restoraunt-form.component';
import { RestorauntHomeComponent } from './components/restoraunt/restoraunt-home/restoraunt-home.component';
import { HeaderRiderComponent } from './components/headers/header-rider/header-rider.component';
import { RiderTabComponent } from './components/rider/rider-tab/rider-tab.component';
import { StorageServiceService } from './services/storage-service.service';
import { RestaurantTabComponent } from './components/restoraunt/restaurant-tab/restaurant-tab.component';
import { HeaderRestaurantComponent } from './components/headers/header-restaurant/header-restaurant.component';
import { RestaurantAnnunciComponent } from './components/restoraunt/restaurant-annunci/restaurant-annunci.component';

@NgModule({
  declarations: [
    AppComponent,
     LoginPage, 

     RiderHomePage, 
     RiderFormPage,
     HeaderRiderComponent,
     RiderTabComponent,
     RestaurantAnnunciComponent,
     RestaurantTabComponent,
     RestorauntFormComponent,
    RestorauntHomeComponent,
    HeaderRestaurantComponent
    ],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(), 
     IonicStorageModule.forRoot(),
     AppRoutingModule,
     FormsModule,
    ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    
    StorageServiceService,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
