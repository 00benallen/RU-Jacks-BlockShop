import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "../environments/environment"
import { Store } from "./store";

@Injectable()
export class ShopService {

    constructor(private httpClient: HttpClient) { }

    getShop(shopName: String): Promise<Store> {

        return this.httpClient.get<Store>(environment.vendorServiceUri + '/shop/' + shopName).toPromise()

    }

    registerShop(store: Store): Promise<void> {

        return this.httpClient.post(environment.vendorServiceUri + '/shop/' + store.fullStoreName, store).toPromise().then(() => {
            console.log("Post successful")
        })

    }

}