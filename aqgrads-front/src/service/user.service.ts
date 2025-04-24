import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UserService{
    private apiUrl= 'http://localhost:3000/user'

    constructor (private http : HttpClient){
    }

    getUserProfile(): Observable<any> {
        return this.http.get(`${this.apiUrl}/profile`, { withCredentials: true });
    }
    updateUserProfile(userData: any): Observable<any> {
        return this.http.patch(`${this.apiUrl}/profile`,userData, {withCredentials: true})
    }
}