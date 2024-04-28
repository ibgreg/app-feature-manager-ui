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

  createFeatureToggler(newFeatureToggler : FeatureToggler) {
    return this.http.post(
        `${environment.baseUrl}/app-feature-toggle/features`,
        newFeatureToggler,
        {
            observe: 'response',
            responseType: 'text'
        }
    );
  }

  updateFeatureToggler(selectedFeatureToggler : FeatureToggler) {
    return this.http.put(
        `${environment.baseUrl}/app-feature-toggle/features/${selectedFeatureToggler.id}`,
        selectedFeatureToggler,
        {
            observe: 'response',
            responseType: 'text'
        }
    );
  } 

  archiveFeatureToggler(id: number) {
    return this.http.delete(
        `${environment.baseUrl}/app-feature-toggle/features/${id}`,
        {
            observe: 'response',
            responseType: 'text'
        }
    );
  }
}
