import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequesterService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://127.0.0.1:8080/');
  }
}
