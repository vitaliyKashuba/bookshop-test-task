import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../serializable/book';
import {HttpRequesterService} from '../../services/http-requester.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {log} from 'util';
import {ShoppingCartService} from '../../services/shopping-cart.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  books: Book[];
  dataSource: MatTableDataSource<Book>;
  displayedColumns: string[] = ['name', 'year', 'price', 'buttons'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private requester: HttpRequesterService, private cart: ShoppingCartService) { }

  ngOnInit() {
    this.requester.getBooks().subscribe(data => {
      this.books = data as Book[];
      this.dataSource = new MatTableDataSource(this.books);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteBook(book: Book) {
    this.requester.deleteBook(book.id).subscribe(
      success => {
        let index = this.books.indexOf(book);
        this.books.splice(index, 1);
        log('success' + this.books);
        this.dataSource = new MatTableDataSource(this.books);
      },
      error => log(error)
    );
  }

  editBook(book: Book) {

  }

  addToCart(book: Book) {
    this.cart.addBook(book);
  }

}
