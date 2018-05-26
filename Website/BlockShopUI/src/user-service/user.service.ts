import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { User } from "./user";
import { environment } from "../environments/environment"

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) {

    }

    getUser(walletId: String): Promise<User> {

        return this.httpClient.get<User>(environment.userServiceUri + '/' + walletId).toPromise()

    }

    registerUser(user: User): Promise<void> {

        return this.httpClient.post(environment.userServiceUri + '/' + user.walletId, user).toPromise().then(() => {
            console.log("Post successful")
        })

    }

}