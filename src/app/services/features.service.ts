import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
    providedIn: 'root'
})
export class FeaturesService {

    private apiUrl = environment.API_URL;

    constructor(private http: HttpClient) { }

    getFeature(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
}