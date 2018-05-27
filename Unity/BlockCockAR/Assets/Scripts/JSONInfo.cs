using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using GoogleARCore;
using Newtonsoft.Json;


public class JSONInfo : MonoBehaviour {
    

    void Start()
    {
        StartCoroutine(GetText());
    }

    IEnumerator GetText()
    {
        using (UnityWebRequest website = UnityWebRequest.Get("http://rujacksvendorservice-env.wnv9mmfbvj.us-east-1.elasticbeanstalk.com/shop/BlockShopExample"))
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
                StoreDetails.RootObject results = JsonConvert.DeserializeObject<StoreDetails.RootObject>(website.downloadHandler.text);
                print(results.fullStoreName);

            }
        }
    }
}

