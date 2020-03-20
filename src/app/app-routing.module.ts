import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { ProfilComponent } from 'src/app/profil/profil.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profil', component: ProfilComponent }
  //{ path: 'home', loadChildren: () => import('./login/login.component').then( m => m.LoginComponent)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
