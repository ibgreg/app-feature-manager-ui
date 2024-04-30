import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  loadAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrl}/app-feature-user/users`);
  }
}
