import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Book} from '../serializable/book';
import {log} from 'util';
import {HttpRequesterService} from '../../services/http-requester.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  editBook: Book;

  constructor(public dialogRef: MatDialogRef<BookEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Book,
              private requester: HttpRequesterService) {

    this.editBook = new Book(this.data.id, this.data.name, this.data.year, this.data.description, this.data.price);
  }

  ngOnInit() {
  }

  save() {
    // TODO validate
    log(this.editBook);
    this.requester.editBook(this.editBook).subscribe(
      success => {
        this.dialogRef.close(this.editBook);
      },
      error => {
        this.dialogRef.close(false);
      }
    );
  }
}
