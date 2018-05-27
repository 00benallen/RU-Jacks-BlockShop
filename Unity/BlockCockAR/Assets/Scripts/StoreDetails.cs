using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Text;

public class StoreDetails {

    public RootObject jsonRootObject;

    public class Product
    {
        public string productName { get; set; }
        public string productPicture { get; set; }
        public int price { get; set; }
        public int stock { get; set; }
        public bool featured { get; set; }
        //public Texture2D tex = new Texture2D(1, 1);
    }

    public class RootObject
    {
        public string fullStoreName { get; set; }
        public string storeBannerText { get; set; }
        public List<string> posterFiles { get; set; }
        public List<Product> products { get; set; }
        public string walletId { get; set; }
        //List<Texture2D> textures;
    }




    // foreach (string s in posterFiles)

    List<Texture2D> GetTextures(List<string> list)
    {
        List<Texture2D> textures = new List<Texture2D>();
        foreach (string s in list) {
            Texture2D tex = new Texture2D(1, 1);
            byte[] bytes = Encoding.UTF8.GetBytes(s);
            tex.LoadImage(bytes);
        }

        return textures;
    }

    

}
