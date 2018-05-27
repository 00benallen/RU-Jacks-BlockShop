using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using System.Text;
using Newtonsoft.Json;
using UnityEngine.UI;

public class NewBehaviourScript : MonoBehaviour {

    public    StoreDetails.RootObject store;
   // UnityWebRequest website;
    public List<Texture2D> posterTextures;
    public Dictionary<StoreDetails.Product, Texture2D> productTexture;


    void Start()
    {
        productTexture = new Dictionary<StoreDetails.Product, Texture2D>();
        StartCoroutine(GetText());

    }

    IEnumerator GetText()
    {
        using (UnityWebRequest website = UnityWebRequest.Get("http://rujacksvendorservice-env.wnv9mmfbvj.us-east-1.elasticbeanstalk.com/shop/Block_Shop_Store"))
        {

            yield return website.SendWebRequest();

            if (website.isNetworkError || website.isHttpError)
            {
                Debug.Log(website.error);
            }
            else
            {
                // Show results as text
                // Or retrieve results as binary data
                Debug.Log(website.downloadHandler.text);

                //JsonUtility.FromJson
                store = JsonConvert.DeserializeObject<StoreDetails.RootObject>(website.downloadHandler.text);

                posterTextures = GetTextures(store.posterFiles);
                foreach (StoreDetails.Product p in store.products) {
                     productTexture.Add(p, SetTexture(p.productPicture));
                }
                
            }






        }
    }


  Texture2D SetTexture(string s)
    {
        Texture2D tex = new Texture2D(1, 1);
        //byte[] bytes = Encoding.UTF8.GetBytes(s);
        byte[] bytes = System.Convert.FromBase64String(FormatString(s));
        StringBuilder sb = new StringBuilder();
        foreach (byte b in bytes) {
            sb.Append(b);
        }
        
        print( sb.ToString());
        sb.Remove(0, sb.Length);
        tex.LoadImage(bytes);
        return tex;
    }
    List<Texture2D> GetTextures(List<string> list)
    {
        List<Texture2D> textures = new List<Texture2D>();
        foreach (string s in list)
        {
            textures.Add(SetTexture(s));
        }

        return textures;
    }

    string FormatString(string s) {


        int i = s.IndexOf(',');
        print(i);
        string ss = s;
         ss = s.Substring(i+1);
      //  ss = ss.Replace(" ", "+");

        int mod4 = ss.Length % 4;
        if (mod4 > 0)
        {
        //    ss += new string('=', 4 - mod4);
        }
        
        return ss;
    }


}
