import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MoblieComponent } from './nest_route/moblie/moblie.component';
import { LaptopComponent } from './nest_route/laptop/laptop.component';
import { HeadPhoneComponent } from './nest_route/head-phone/head-phone.component';
import { AirCondtionComponent } from './nest_route/air-condtion/air-condtion.component';
import { AllMoblieComponent } from './nest_route/moblie_routing/all-moblie/all-moblie.component';
import { MiComponent } from './nest_route/moblie_routing/mi/mi.component';
import { NokiaComponent } from './nest_route/moblie_routing/nokia/nokia.component';
import { AllLaptopComponent } from './nest_route/laptop/laptop_routing/all-laptop/all-laptop.component';
import { DellComponent } from './nest_route/laptop/laptop_routing/dell/dell.component';
import { SonyComponent } from './nest_route/laptop/laptop_routing/sony/sony.component';
import { AllHeadComponent } from './nest_route/head-phone/head_phone_routing/all-head/all-head.component';
import { BossComponent } from './nest_route/head-phone/head_phone_routing/boss/boss.component';
import { LgComponent } from './nest_route/air-condtion/ac_routing/lg/lg.component';
import { AllAcComponent } from './nest_route/air-condtion/ac_routing/all-ac/all-ac.component';
import { LoardComponent } from './nest_route/air-condtion/ac_routing/loard/loard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    LoginComponent,
    MoblieComponent,
    LaptopComponent,
    HeadPhoneComponent,
    AirCondtionComponent,
    AllMoblieComponent,
    MiComponent,
    NokiaComponent,
    AllLaptopComponent,
    DellComponent,
    SonyComponent,
    AllHeadComponent,
    BossComponent,
    LgComponent,
    AllAcComponent,
    LoardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
          {
            path: '', component: HomeComponent,
            children: [
              {
                path: '', component: MoblieComponent,
                children: [
                  {path: '', component: AllMoblieComponent},
                  {path: 'mi', component: MiComponent},
                  {path: 'nokia', component: NokiaComponent}
                ]
              },
              {
                path: 'Laptop', component: LaptopComponent,
                children: [
                   {path: '', component: AllLaptopComponent },
                   {path: 'dell', component: DellComponent },
                   {path: 'sony', component: SonyComponent }
                ]
              },
              {
                path: 'HeadPhone', component: HeadPhoneComponent,
                children: [
                  {path: '', component: AllHeadComponent },
                  {path: 'boss', component: BossComponent }
               ]
              },
              {
                path: 'Air_condtion', component: AirCondtionComponent,
                children: [
                  {path: '', component: AllAcComponent},
                  {path: 'lg_ac', component: LgComponent},
                  {path: 'loard_ac', component: LoardComponent}
                ]
              }
            ]
           },
          {path: 'about', component: AboutComponent},
          {path: 'login', component: LoginComponent },
          {path: 'signup', component: SignUpComponent }
    ])
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
