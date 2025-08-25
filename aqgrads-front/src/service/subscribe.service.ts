import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class SubscribeService{
    // private apiUrl = env('api_url') + '/subscribe';
    // constructor (private http : HttpClient){
    // }

    // completeSubscription(subscriptionData: any): Observable<any> {
    //     return this.http.post(`${this.apiUrl}/complete`,subscriptionData, {withCredentials: true})
    // }
}