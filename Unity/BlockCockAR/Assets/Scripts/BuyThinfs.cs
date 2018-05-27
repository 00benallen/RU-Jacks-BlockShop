using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class BuyThinfs : MonoBehaviour {

    StoreDetails.Product product;
    Image image;
    int clientWalletId;
    int storeWalletId;
   
  public  void SetProduct(StoreDetails.Product p) {
        product = p;
    }

   public void SetImage(Image i) {
        image = i;

    }

    public void ChangeText() {
        string s = "Price: " + product.price + "\n Stock :" + product.stock;
        this.gameObject.GetComponent<Text>().text =  s;

    }

    public void ChangeBack() {
        string s = product.productName;
        this.gameObject.GetComponent<Text>().text = s;
    }

    public void makePurchase() {
        if (product.stock > 0) {
            //clientWalletId;
            //storeWalletId;
            //product.price;
            product.stock--;
                }
    } 


}
