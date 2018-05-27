import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from '../user-service/user';
import { UserService } from '../user-service/user.service';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop-service/shop.service';

@Component({
  selector: 'app-shopper-main',
  templateUrl: './shopper-main.component.html',
  styleUrls: ['./shopper-main.component.css']
})
export class ShopperMainComponent implements OnInit {

  private user: User
  private userIsLoading: boolean

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.getShopFromService()
  }

  getShopFromService() {
    const walletId = this.route.snapshot.paramMap.get('walletId');
    this.userIsLoading = true
    this.userService.getUser(walletId).then((user) => {
      this.user = user
      this.userIsLoading = false
      this.changeDetector.detectChanges()
      console.log(this.user)
    })
  }

}
