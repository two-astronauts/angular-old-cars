import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public getEvents(): Observable<any> {
    return this.httpClient.get<any>(environment.api + '/evento', this.httpOptions);
  }

  public getEventsMongo(): Observable<any> {
    return this.httpClient.get<any>(environment.api + '/mongo/evento', this.httpOptions);
  }

  public saveEvent(params: any): Observable<any> {
    return this.httpClient.post<any>(environment.api + '/mongo/evento', params, this.httpOptions);
  }

  public updateEvent(id: String, params: any): Observable<any> {
    return this.httpClient.put<any>(environment.api + '/mongo/evento/' + id, params, this.httpOptions);
  }

  public deleteEvent(id: String): Observable<any> {
    return this.httpClient.delete<any>(environment.api + '/mongo/evento/' + id, this.httpOptions);
  }
}
