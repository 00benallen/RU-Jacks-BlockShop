import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Store } from '../shop-service/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ShopService } from '../shop-service/shop.service';

@Component({
  selector: 'app-seller-main',
  templateUrl: './seller-main.component.html',
  styleUrls: ['./seller-main.component.css']
})
export class SellerMainComponent implements OnInit {

  private store: Store

  private firstPosterPic: String
  private secondPosterPic: String

  private storeIsLoading: boolean

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private location: Location,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
    this.getShopFromService()
  }

  getShopFromService() {
    const shopName = this.route.snapshot.paramMap.get('shopName');
    this.storeIsLoading = true
    this.shopService.getShop(shopName).then((store) => {
      this.store = store
      this.firstPosterPic = store.posterFiles[0]
      this.secondPosterPic = store.posterFiles[1]
      this.storeIsLoading = false
      this.changeDetector.detectChanges()
      console.log(this.store)
    })
  }

  edit() {
    this.router.navigate(['/seller'])
  }
}
