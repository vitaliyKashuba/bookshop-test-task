import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequesterService {

  constructor(private http: HttpClient) { }

  apiEndpoint = 'http://localhost:8080/api/book/';

  getData() {
    return this.http.get('http://127.0.0.1:8080/');
  }

  getBooks() {
    return this.http.get(this.apiEndpoint);
  }

  deleteBook(id: number) {
    return this.http.delete(this.apiEndpoint + id);
  }
}
