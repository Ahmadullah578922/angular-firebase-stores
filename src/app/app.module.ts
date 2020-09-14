import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import {  AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import{ environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { CartsComponent } from './components/carts/carts.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { GoodsService} from './services/goods.service';
import { AuthService} from './services/auth.service';
import { UserService} from './services/user.service';
import { CartService} from './services/cart.service';




@NgModule({
  declarations: [
    AppComponent,
    CartsComponent,
    GoodsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'stores' ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule ,
    BrowserAnimationsModule
  
  ],
  providers: [GoodsService, AuthService, UserService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
