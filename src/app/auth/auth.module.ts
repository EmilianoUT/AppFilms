import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './../app-routing.module';
import { RegistrationPage } from './../registration/registration.page';
import { LoginPage } from './../login/login.page';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [ RegistrationPage, LoginPage],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService]

})
export class AuthModule { }
