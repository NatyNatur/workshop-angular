import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // servicio utiliza httpclient (sus métodos)
  constructor(private http: HttpClient) { }

  exeGet(url:any) {
    return this.http.get(url)
  }
}
