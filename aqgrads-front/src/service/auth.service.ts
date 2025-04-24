import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable,of } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/auth';

    constructor(private http: HttpClient) {
    }

    login(credentials: { email: string, password: string }): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, credentials, { withCredentials: true })
    }

    register(user: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, user, { withCredentials: true })
    }

    logout(): Observable<any> {
        return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true })
    }

    private loggedInSubject = new BehaviorSubject<boolean>(false);
    loggedIn$ = this.loggedInSubject.asObservable();

    isLoggedIn(): Observable<boolean> {
        return this.http.get<{ loggedIn: boolean }>(`${this.apiUrl}/check-auth`, { withCredentials: true }).pipe(
            map(response => {
                this.loggedInSubject.next(response.loggedIn);
                return response.loggedIn;
            }),
            catchError(() => {
                this.loggedInSubject.next(false);
                return of(false);
            })
        );
    }
}