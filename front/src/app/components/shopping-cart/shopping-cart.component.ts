import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Book} from '../serializable/book';
import {HttpRequesterService} from '../../services/http-requester.service';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: Book[];
  quantity: Map<number, number> = new Map<number, number>();
  sum: number;

  constructor(public dialogRef: MatDialogRef<ShoppingCartComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Book,
              private cartService: ShoppingCartService) {

    this.initvariables();
  }

  ngOnInit() {
  }

  increaseCount(id: number) {
    let count = this.quantity.get(id);
    count++;
    this.quantity.set(id, count);
    this.calculateSum();
  }

  decreaseCount(id: number) {
    let count = this.quantity.get(id);
    if (count > 0) {
      count--;
      this.quantity.set(id, count);
      this.calculateSum();
    }
  }

  calculateSum() {
    this.sum = 0;
    this.cart.forEach((book) => {
      this.sum += book.price * this.quantity.get(book.id);
    });
  }

  removeFromCart(book: Book) {
    this.cartService.removeBook(book);
    this.initvariables();
  }

  initvariables() {
    this.cart = this.cartService.getBooks();

    this.cart.forEach((c) => this.quantity.set(c.id, 1));
    this.calculateSum();
  }

}
