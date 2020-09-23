import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './components/login/login.page';
import { RiderFormPage } from './components/rider/rider-form/rider-form.page';
import { RiderHomePage } from './components/rider/rider-home/rider-home.page';
import { RestorauntFormComponent } from './components/restoraunt/restoraunt-form/restoraunt-form.component';
import { RestorauntHomeComponent } from './components/restoraunt/restoraunt-home/restoraunt-home.component';
import { RestaurantAnnunciComponent } from './components/restoraunt/restaurant-annunci/restaurant-annunci.component';

const routes: Routes = [
  {path: "", component: LoginPage},
  {path: "riderform/:riderEmail", component: RiderFormPage},
  {path: "riderhome/:riderEmail", component: RiderHomePage},

<<<<<<< Updated upstream
  {path: "restaurantform/:restorauntEmail", component: RestorauntFormComponent},
  {path: "restauranthome/:restorauntEmail", component: RestorauntHomeComponent}
=======
  {path: "restaurantform/:idRestoraunt", component: RestorauntFormComponent},
  {path: "restauranthome/:idRestoraunt", component: RestorauntHomeComponent},
  {path: "restaurantannunci/:idRestoraunt",component:RestaurantAnnunciComponent}

>>>>>>> Stashed changes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
