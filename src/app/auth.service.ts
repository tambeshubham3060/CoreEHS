import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  currentUser: any;
  registeredUsers = [
    { username: 'user', password: 'password' }
  ];

  constructor(private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    let useravailabel = this.registeredUsers.find((ele: any) => {
      if (ele.username == username && ele.password == password) {
        return ele;
      }
    })
    if (useravailabel) {
      this.isLoggedIn.next(true);
      return of(true);
    } else {
      return of(false);
    }
  }

  register(username: string, password: string): Observable<boolean> {
    return of(true).pipe(
      catchError(error => throwError('Registration failed'))
    );
  }

  logout(): void {
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
  setCurrentUser(user: any): void {
    this.currentUser = user;
  }

  removeCurrentUser(): void {
    this.currentUser = null;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }
}

