import { Component, OnInit } from '@angular/core';
import {log} from 'util';
import {AuthService} from '../../services/auth.service';
import {LoginForm} from '../serializable/auth-form';
import {TokenStorageService} from '../../services/token-storage.service';
import {HttpRequesterService} from '../../services/http-requester.service';
import {MatDialogRef, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  name = '';
  password = '';

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              public dialogRef: MatDialogRef<LoginComponent>,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login() {
    log('do login');
    log(this.name);
    log(this.password);
    this.authService.attemptAuth(new LoginForm(this.name, this.password)).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.dialogRef.close(true);
      },
      error => {
        this.snackBar.open('error while try ti login');
      }
    );
  }

}
