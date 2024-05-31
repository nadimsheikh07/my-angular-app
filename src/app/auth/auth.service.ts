import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  login(data: any): Observable<any> {
    return this.http.post("/auth/login", data).pipe(
      tap((response: any) => {
        localStorage.setItem("token", response.token);
        this.authStatus.next(true);
      })
    );
  }

  register(data: any): Observable<any> {
    return this.http.post("/auth/register", data);
  }

  logout(): void {
    localStorage.removeItem("token");
    this.authStatus.next(false);
    this.router.navigate(["/login"]);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }

  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }
}
