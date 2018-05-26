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

const appRoutes: Routes = [

  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'shopper',
    component: ShopperSettingsComponent },
  { path: 'shopper/main', component: ShopperMainComponent
  },
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
    ShopperMainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule
  ],
  providers: [UserService, ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
