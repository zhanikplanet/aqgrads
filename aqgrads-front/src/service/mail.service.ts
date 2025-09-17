import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
    providedIn:'root'   
})
export class MailService{
    constructor(private http: HttpClient){}
    private api_url = environment.apiUrl + '/mail';

    sendMail(mailData: any): Observable<any>{
        return this.http.post(`${this.api_url}/send-mail`, mailData, {withCredentials: true});
    }
}