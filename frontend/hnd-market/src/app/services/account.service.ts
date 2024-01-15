import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) : Observable<User | null>{
    let address = `${environment.baseApiUrl}/users?username=${username}&password=${password}`;
    return this.httpClient.get<User[]>(address).pipe(
      map(t => t ? t[0] : null ),
      tap(data => localStorage.setItem('token', data?.token!)));//token localStorage'a kaydediliyor 
  }


  public get accessToken(): string|null{
    return localStorage.getItem('token');
  }
  
  logout(){
    localStorage.removeItem('token');
  }

  //
  getActiveUser(): User | null {
    //localStroga'dan token bilgisi alınıyor
    let token = localStorage.getItem('token');
    if(!token){
      return null;
    }

    let jwtHelper = new JwtHelperService();
        //token süresi token'ın içinde, bu satırda token geçerliliği kontrol ediliyor.
    if(jwtHelper.isTokenExpired(token)){
      return null;
    }

    //token decode edilip içinden veriler alınıyor
    let decode = jwtHelper.decodeToken(token);

    return {
      fullName:decode['name'],
      username:decode['username'],
      token: token
    };
  }
}
