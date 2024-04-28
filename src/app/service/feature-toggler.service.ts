import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureToggler } from '../models/feature-toggler';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeatureTogglerService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<FeatureToggler[]> {
    return this.http.get<FeatureToggler[]>(`${environment.baseUrl}/app-feature-toggle/features`);
  }

}
