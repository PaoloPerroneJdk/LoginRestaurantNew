import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
 
const routes: Routes = [
  {
    path: 'members',
    loadChildren: () =>
      import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registerRestaurant',
    loadChildren: () =>
      import('./register/register.module').then(m => m.RegisterPageModule)
  },

  {
    path: 'registerRiders',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },




];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}