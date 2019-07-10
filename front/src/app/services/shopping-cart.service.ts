import { Injectable } from '@angular/core';
import {Book} from '../components/serializable/book';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cart: Set<Book> = new Set();
  // cart = new Map<Book, number>();

  constructor() { }

  public addBook(book: Book) {
    this.cart.add(book);
  }

  public getBooks() {
    return this.cart;
  }

  public removeBook(book: Book) {
    this.cart.delete(book);
  }
}
