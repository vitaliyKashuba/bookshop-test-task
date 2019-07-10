import { Component, OnInit } from '@angular/core';
import {BookCreateComponent} from '../book-create/book-create.component';
import {Book} from '../serializable/book';
import {MatDialog} from '@angular/material';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
  }

  openCart() {
    const dialogRef = this.dialog.open(ShoppingCartComponent, {
      width: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
