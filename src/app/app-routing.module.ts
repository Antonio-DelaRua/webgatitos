import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page/not-found-page.component';


const routes: Routes = [

  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  
  {
    path: 'login',
    component: LoginPageComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'home',
        component: HomePageComponent,
        canActivate: [AuthGuard]
      },
      
    
    ]
  },




  

  {
    path: '**',
    component: NotFoundPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
