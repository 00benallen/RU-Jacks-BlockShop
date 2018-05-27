import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { ShopService } from '../shop-service/shop.service';
import { Store } from '../shop-service/store';
import { User } from '../user-service/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private identifier: string

  constructor(private userService: UserService, private shopService: ShopService, private router: Router) { }

  ngOnInit() {
  }

  onIdentifierChange(identifier: string) {
    if(identifier.length >= 8) {
      console.log("Identifier stored.")
      this.identifier = identifier
    }
  }

  attemptLogin() {
    if(this.identifier.length == 42) {
      console.log("Etherium Wallet ID Detected.")
      this.userService.getUser(this.identifier).then((user) => {
        this.router.navigate(['shopper/main/' + this.identifier])
      })
    } else {
      console.log("Shop name detected.")
      this.shopService.getShop(this.identifier).then((shop) => {
        this.router.navigate(['seller/main/' + this.identifier])
      })
    }
  }
}
