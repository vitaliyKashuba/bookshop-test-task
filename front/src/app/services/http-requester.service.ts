import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../components/serializable/book';

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

  editBook(book: Book) {
    return this.http.post(this.apiEndpoint + book.id, book);
  }

  addBook(book: Book) {
    return this.http.put(this.apiEndpoint, book);
  }
}
