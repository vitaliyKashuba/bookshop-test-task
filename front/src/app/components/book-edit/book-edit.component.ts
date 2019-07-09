import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Book} from '../serializable/book';
import {log} from 'util';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Book) { }

  ngOnInit() {
  }

  save() {
    // TODO validate
    log(this.data);
    //sent to back
    //edit in table if success
  }
}
