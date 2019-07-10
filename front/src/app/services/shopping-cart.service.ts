import { Injectable } from '@angular/core';
import {Book} from '../components/serializable/book';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cart: Book[] = [];
  // cart = new Map<Book, number>();

  constructor() { }

  // public addBook(book: Book) {
  //   this.cart.set(book, 1);
  //   // this.cart.forEach((value, key) => {
  //   //   log('key ' + key);
  //   //   log('value ' + value);
  //   // });
  // }

  public addBook(book: Book) {
    this.cart.push(book);
  }

  public getBooks() {
    return this.cart;
  }

  public removeBook(book: Book) {
    const index = this.cart.indexOf(book);
    this.cart.splice(index, 1);
  }
}
