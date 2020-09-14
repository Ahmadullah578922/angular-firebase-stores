import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from './services/guards/auth.guard';
import { NotAuthGuard } from './services/guards/not-auth.guard';
import { AdminGuard } from './services/guards/admin.guard';

import { HomeComponent } from './components/home/home.component';
import { CartsComponent } from './components/carts/carts.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: {index: 0} },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard], data: {index: 1} },
  { path: 'signup', component: SignupComponent, canActivate: [NotAuthGuard], data: {index: 2} },
  { path: 'cart', component: CartsComponent, canActivate: [AuthGuard], data: {index: 3} },
  { path: 'admin', component: GoodsComponent, canActivate: [AdminGuard], data: {index: 4} },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
