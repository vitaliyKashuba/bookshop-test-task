import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../serializable/book';
import {HttpRequesterService} from '../../services/http-requester.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {log} from 'util';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {BookPopupComponent} from '../book-popup/book-popup.component';
import {BookEditComponent} from '../book-edit/book-edit.component';
import {ConfirmationPopupComponent} from '../confirmation-popup/confirmation-popup.component';

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
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private requester: HttpRequesterService,
              private cart: ShoppingCartService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.requester.getBooks().subscribe(data => {
      this.books = data as Book[];
      this.dataSource = new MatTableDataSource(this.books);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addToCart(book: Book) {
    this.cart.addBook(book);
  }

  openPopup(book: Book): void {
    const dialogRef = this.dialog.open(BookPopupComponent, {
      width: '60%',
      data: book
    });
  }

  editBook(book: Book) {
    const dialogRef = this.dialog.open(BookEditComponent, {
      width: '60%',
      data: book
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteBook(book: Book) {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.requester.deleteBook(book.id).subscribe(
          success => {
            const index = this.books.indexOf(book);
            this.books.splice(index, 1);
            log('success' + this.books);
            this.dataSource = new MatTableDataSource(this.books);
          },
          error => log(error)
        );
      }
    });
  }
  
}
