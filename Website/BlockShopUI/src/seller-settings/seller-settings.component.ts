import { Component, OnInit } from '@angular/core';
import { Product, Store } from '../shop-service/store';
import { ShopService } from '../shop-service/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-settings',
  templateUrl: './seller-settings.component.html',
  styleUrls: ['./seller-settings.component.css']
})
export class SellerSettingsComponent implements OnInit {

  private fullStoreNameReceived: Boolean
  private storeBannerTextReceived: Boolean
  private storeWalletIdReceived: Boolean

  private store: Store
  private showStoreInvalidMsg: boolean

  private fullStoreName: String

  constructor(private shopService: ShopService, private router: Router) {
    this.store = new Store()
    this.store.products = []
    this.store.posterFiles = []
    this.store.fullStoreName = ""
    this.store.storeBannerText = ""
    let emptyProduct = new Product()
    this.store.products.push(emptyProduct)
    this.showStoreInvalidMsg = false
  }

  ngOnInit() {
    
  }

  onFullStoreNameChange(fullStoreName: String) {
    if(fullStoreName.length >= 8) {
      this.store.fullStoreName = fullStoreName
      this.fullStoreNameReceived = true
    } else {
      console.log("Store name invalid.")
      this.fullStoreNameReceived = false
    }
  }

  onStoreBannerTextChange(storeBannerText: String) {
    if(storeBannerText.length >= 8) {
      this.store.storeBannerText = storeBannerText
      this.storeBannerTextReceived = true
    } else {
      console.log("Store banner text invalid")
      this.storeBannerTextReceived = false
    }
  }

  onStoreWalletIdChange(storeWalletId: String) {
    if(storeWalletId.length == 66) {
      this.store.walletId = storeWalletId
      this.storeWalletIdReceived = true
    } else {
      console.log("Store wallet ID invalid")
      this.storeWalletIdReceived = false
    }
  }

  onFirstPosterPicChange(event) {
    console.log(event.target.files[0])
    this.fileToBase64(event.target.files[0], (base64String: String) => {
      this.store.posterFiles.push(base64String)
    })
  }

  onSecondPosterPicChange(event) {
    this.fileToBase64(event.target.files[0], (base64String: String) => {
      this.store.posterFiles.push(base64String)
    })
    
  }

  onProductNameChange(product: Product, productName: String) {
    product.productName = productName
    this.makeNewProductRowIfReady()
  }

  onProductPicChange(product: Product, event) {

    this.fileToBase64(event.target.files[0], (base64String: String) => {
      product.productPicture = base64String
      this.makeNewProductRowIfReady()
    })
  }

  onPriceChange(product: Product, price: number) {
    product.price = price
    this.makeNewProductRowIfReady()
  }

  onStockChange(product: Product, stock: number) {
    product.stock = stock
    this.makeNewProductRowIfReady()
  }

  onFeaturedChange(product: Product, featured: boolean) {
    product.featured = featured
    this.makeNewProductRowIfReady()
  }

  makeNewProductRowIfReady() {
    let allValid = this.validateProducts()

    if(allValid) {
      this.store.products.push(new Product())
    }
  }

  onSubmitButtonPressed() {

    let products = this.store.products
    let lastProduct = products[this.store.products.length-1]

    if(lastProduct.productName == null) {
      console.log("Empty product at end, removing")
      this.store.products = products.slice(0, this.store.products.length-1)
    }

    if(this.validateStore()) {
      this.showStoreInvalidMsg = false
      console.log("Store is valid, ready to go.")
      //Insert next step here
      this.shopService.registerShop(this.store).then(() => {
        this.router.navigate(['/seller/main/' + this.store.fullStoreName])
      })
    } else {
      console.log("Store is invalid, fix.", this.store)
      this.store.products.push(new Product())
      this.showStoreInvalidMsg = true
    }
  }

  validateStore(): boolean {
    let store = this.store

    return store.fullStoreName.length >= 8
        && store.posterFiles.length == 2
        && store.products.length >= 1
        && store.storeBannerText.length >= 8
        && this.validateProducts()
        && store.walletId.length == 66
    
  }

  validateProducts(): boolean {
    let allValid = true
    for(let product of this.store.products) {
      allValid = allValid && this.validateProduct(product)
    }
    return allValid
  }

  validateProduct(product: Product): boolean {
    return product.price >= 0
    && product.productName.length >= 8
    && product.productPicture != null
    && product.stock >= 1
  }

  fileToBase64(file: Blob, callback: (base64String: String)=>void) {
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      let base64Image: String = myReader.result;
      callback(base64Image)
      //console.log(base64Image);
    }
    if (file) {
      myReader.readAsDataURL(file);
    }
  }
}
