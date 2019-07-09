import { Injectable } from '@angular/core';
import {Book} from '../components/serializable/book';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  // cart: Book[];
  // cart: { [book: Book]: number; } = { };
  cart = new Map<Book, number>();

  constructor() { }

  public addBook(book: Book) {
    this.cart.set(book, 2);
    // this.cart.forEach((value, key) => {
    //   log('key ' + key);
    //   log('value ' + value);
    // });
  }
}
