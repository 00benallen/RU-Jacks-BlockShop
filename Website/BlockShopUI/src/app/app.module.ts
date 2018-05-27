import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SellerSettingsComponent } from "../seller-settings/seller-settings.component"
import { ShopperSettingsComponent } from "../shopper-settings/shopper-settings.component"
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component"
import { LoginComponent } from '../login/login.component';
import { UserService } from '../user-service/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ShopperMainComponent } from '../shopper-main/shopper-main.component';
import { ShopService } from '../shop-service/shop.service';
import { SellerMainComponent } from '../seller-main/seller-main.component';
import { MaterialModule } from '../app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from '../main-page/main-page.component'

const appRoutes: Routes = [

  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'shopper',
    component: ShopperSettingsComponent },
  { path: 'shopper/main/:walletId', component: ShopperMainComponent},
  { path: 'seller/main/:shopName', component: SellerMainComponent},
  { path: 'main', component: MainPageComponent},
  {
    path: 'seller',
    component: SellerSettingsComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SellerSettingsComponent,
    ShopperSettingsComponent,
    PageNotFoundComponent,
    LoginComponent,
    ShopperMainComponent,
    SellerMainComponent,
    MainPageComponent,
    ShopperMainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
