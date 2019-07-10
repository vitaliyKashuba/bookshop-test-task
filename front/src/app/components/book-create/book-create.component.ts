import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Book} from '../serializable/book';
import {HttpRequesterService} from '../../services/http-requester.service';
import {log} from 'util';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  name: string;
  year: number;
  description: string;
  price: number;

  constructor(public dialogRef: MatDialogRef<BookCreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Book,
              private requester: HttpRequesterService) {}

  ngOnInit() {
  }

  save() {
    // TODO validate
    this.requester.addBook(new Book(null, this.name, this.year, this.description, this.price)).subscribe(
      success => {
        this.dialogRef.close(true);
      },
      error => {
        this.dialogRef.close(false);
      }
    );
  }

}
