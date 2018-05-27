using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using GoogleARCore.Examples.HelloAR;


public class RoomScript : MonoBehaviour {


    //It was late, I was tired. Just don't look at me. This shit works
    public GameObject banner;
    public GameObject product1;
    public GameObject product2;
    public GameObject product3;
    public GameObject product4;
    public GameObject product5;
    public GameObject controller;
    List<Texture2D> posterTextures;
    Dictionary<StoreDetails.Product, Texture2D> productTexture;
    StoreDetails.RootObject store;


   public List<GameObject> products;

    // Use this for initialization
    void Awake()
    {
        products = new List<GameObject>();
        banner = GameObject.Find("BannerTitle");
        product1 = GameObject.Find("product1Title");
        product2 = GameObject.Find("product2Title");
        product3 = GameObject.Find("product3Title");
        product4 = GameObject.Find("product4Title");
        product5 = GameObject.Find("product5Title");

        controller = GameObject.Find("Example Controller");

        posterTextures = controller.GetComponent<HelloARController>().posterTextures;
        productTexture = controller.GetComponent<HelloARController>().productTexture;
        store = controller.GetComponent<HelloARController>().store;


      //  banner.SetActive(false);
       // product1.SetActive(false);
        //product2.SetActive(false);
        // product3.SetActive(false);
        //product4.SetActive(false);
        //product5.SetActive(false);
        
        products.Insert(0,product1);
        products.Insert(1, product2);
        products.Insert(2, product3);
        products.Insert(3, product4);
        products.Insert(4, product5);
        print(products.Count);
    }


   public void setInformation(StoreDetails.RootObject store, List<Texture2D> posterTextures, Dictionary<StoreDetails.Product, Texture2D> productTexture) {
        Debug.Log("Spawning Room");
        Debug.Log(posterTextures.ToString());
        Debug.Log(productTexture.ToString());
        Debug.Log(store.storeBannerText);

        banner.SetActive(true);
        banner.GetComponent<Text>().text = store.storeBannerText;
        
        banner.GetComponentInChildren<Image>().sprite = Sprite.Create(posterTextures[0], new Rect(new Vector2(0, 0), new Vector2(posterTextures[0].width, posterTextures[0].height)), new Vector2(0, 0));

        

        int productSize = products.Count;
        print(productSize);
        if (store.products.Count < productSize) {
            productSize = store.products.Count;
        }


        for (int i = 0; i < productSize; i++) {


            products[i].GetComponent<Text>().text = store.products[i].productName;
            products[i].GetComponent<BuyThinfs>().SetProduct(store.products[i]);
            products[i].SetActive(true);
            products[i].GetComponentInChildren<Image>().sprite = Sprite.Create(productTexture[store.products[i]], new Rect(new Vector2(0, 0), new Vector2(productTexture[store.products[i]].width, productTexture[store.products[i]].height)), new Vector2(0, 0));
        
        }


    }


}
