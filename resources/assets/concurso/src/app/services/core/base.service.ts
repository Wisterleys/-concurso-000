import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericResult } from 'src/app/models/core/generic-result.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  private http: HttpClient;
  private apiUrl: string

  constructor(
    protected injector: Injector
  ) {
    this.http = this.injector.get(HttpClient);
    this.apiUrl = `${environment.baseUrl}`;
  }
  get(endpoint:string):Observable<GenericResult>{
    return this.http.get<GenericResult>(this.apiUrl+endpoint,{headers:this.getHeaders()})
  }
  post(endpoint:string,body: T):Observable<GenericResult>{
    return this.http.post<GenericResult>(this.apiUrl+endpoint,body,{headers:this.getHeaders()})
  }
  put(endpoint:string,body: T):Observable<GenericResult>{
    return this.http.put<GenericResult>(this.apiUrl+endpoint,body,{headers:this.getHeaders()})
  }
  delete(endpoint:string):Observable<GenericResult>{
    return this.http.delete<GenericResult>(this.apiUrl+endpoint,{headers:this.getHeaders()})
  }
  patch(endpoint:string):Observable<GenericResult>{
    return this.http.patch<GenericResult>(this.apiUrl+endpoint,{headers:this.getHeaders()})
  }


  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
    return headers;
  }
}
