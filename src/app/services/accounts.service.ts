import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {
  
  private apiURL = environment.API_URL;
  
  constructor(private http: HttpClient) { }

  getAccount(): Observable<any>{
    return this.http.get<any>(this.apiURL)
  }
}
