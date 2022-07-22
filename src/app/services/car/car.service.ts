import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public getCars(): Observable<any> {
    return this.httpClient.get<any>(environment.api + '/carro', this.httpOptions);
  }

  public getCarCountries(): Observable<any> {
    return this.httpClient.get<any>(environment.api + '/carro-pais', this.httpOptions);
  }
}
