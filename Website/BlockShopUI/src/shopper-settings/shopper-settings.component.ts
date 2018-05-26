import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopper-settings',
  templateUrl: './shopper-settings.component.html',
  styleUrls: ['./shopper-settings.component.css']
})
export class ShopperSettingsComponent implements OnInit {

  private walletId: String
  private walletIdReceived: Boolean

  private shippingAddress: String
  private shippingAddressReceived: Boolean

  private submitIncorrectlyPressed: Boolean

  constructor(private userService: UserService, private router: Router) { 
    this.walletIdReceived = false
  }

  ngOnInit() {
  }

  onWalletIdEnter(walletId: String) {
    this.walletId = walletId
    this.validateWalletId()
  }

  validateWalletId() {
    if(this.walletId.length == 66) {
      this.walletIdReceived = true
      console.log("Wallet id", this.walletId)
    }
  }

  onShippingAddressEnter(shippingAddress: String) {
    this.shippingAddress = shippingAddress
    this.validateShippingAddress()
  }

  validateShippingAddress() {
    if(this.shippingAddress.length > 0) {
      this.shippingAddressReceived = true
      console.log("shippingAddress", this.shippingAddress)
    }
  }

  onSubmit() {
    console.log("Submit button pressed")

    this.validateShippingAddress()
    this.validateWalletId()

    if(this.shippingAddressReceived && this.walletIdReceived) {
      console.log("Submit button pressed, input valid.")
      this.userService.registerUser({
        walletId: this.walletId,
        shippingAddress: this.shippingAddress
      }).then(() => {
        this.router.navigate(['/shopper/main'])
      })

    }
  }
  

}
