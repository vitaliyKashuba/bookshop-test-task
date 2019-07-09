import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Book} from '../serializable/book';

@Component({
  selector: 'app-book-popup',
  templateUrl: './book-popup.component.html',
  styleUrls: ['./book-popup.component.css']
})
export class BookPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Book) { }

  ngOnInit() {
  }

}
