import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import {
  RequestMethod,
  URLSearchParams
} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  public getAllUsers() {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    });
    return this.http.get('http://localhost:3000/users', {headers: httpOptions});
  }

  public createUser(user: any) {
    return this.http.post('http://localhost:3000/users', user);
  }

  public getUserById(id: string) {
    const httpOptions   = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    });
    const params = new HttpParams().set('userid', id);

    return this.http
      .request(RequestMethod.Get.toString(),
        'http://localhost:3000/users', {headers: httpOptions, params: params});
  }
}
