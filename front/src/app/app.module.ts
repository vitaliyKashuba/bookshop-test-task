import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

import { httpInterceptorProviders } from './services/auth-interceptor';
import { BookTableComponent } from './components/book-table/book-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { BookPopupComponent } from './components/book-popup/book-popup.component';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CharacterInputDirective } from './services/character-input.directive';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookTableComponent,
    ToolbarComponent,
    BookPopupComponent,
    BookEditComponent,
    ConfirmationPopupComponent,
    CharacterInputDirective,
    BookCreateComponent,
    ShoppingCartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [
    BookPopupComponent,
    BookEditComponent,
    ConfirmationPopupComponent,
    BookCreateComponent,
    ShoppingCartComponent
  ]
})
export class AppModule { }
