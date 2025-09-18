import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
    providedIn:'root'
})
export class SubscribeService{
    private apiUrl = environment.apiUrl + 'SubscriptionInfo/CreateSubscription';
    constructor (private http : HttpClient){
    }

    completeSubscription(subscriptionData: any): Observable<any> {
        return this.http.post(`${this.apiUrl}`,subscriptionData, {withCredentials: true})
    }
}