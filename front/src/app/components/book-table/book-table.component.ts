import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../serializable/book';
import {HttpRequesterService} from '../../services/http-requester.service';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {log} from 'util';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {BookPopupComponent} from '../book-popup/book-popup.component';
import {BookEditComponent} from '../book-edit/book-edit.component';
import {ConfirmationPopupComponent} from '../confirmation-popup/confirmation-popup.component';
import {BookCreateComponent} from '../book-create/book-create.component';

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
              public dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.requester.getBooks().subscribe(data => {
      this.books = data as Book[];

      this.initDataSource();
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
      if (result) {
        log('success');
        this.deleteBookFromFront(book);
        this.books.push(result);
        this.reinitDataSource();
      } else {
        this.snackBar.open('error editing message');
      }
    });
  }

  deleteBook(book: Book) {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.requester.deleteBook(book.id).subscribe(
          success => {
            this.deleteBookFromFront(book);
            this.reinitDataSource();
            this.snackBar.open('deleted');
          },
          error => this.snackBar.open('error while deleting object')
        );
      }
    });
  }

  deleteBookFromFront(book: Book) {
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }

  reinitDataSource() {
    this.initDataSource();
  }

  initDataSource() {
    this.dataSource = new MatTableDataSource(this.books);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAddClick() {
    const dialogRef = this.dialog.open(BookCreateComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.requester.getBooks().subscribe(data => {
          this.books = data as Book[];
          this.initDataSource();
        });
      } else {
        this.snackBar.open('error adding new book');
      }
    });
  }

}
