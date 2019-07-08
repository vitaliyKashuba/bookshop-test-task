import { Component, OnInit } from '@angular/core';
import {log} from 'util';
import {AuthService} from '../../services/auth.service';
import {LoginForm} from '../serializable/auth-form';
import {TokenStorageService} from '../../services/token-storage.service';
import {HttpRequesterService} from '../../services/http-requester.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  name = '';
  password = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private requester: HttpRequesterService) { }

  ngOnInit() {
  }

  login() {
    log('do login');
    log(this.name);
    log(this.password);
    this.authService.attemptAuth(new LoginForm(this.name, this.password)).subscribe(
      data => {
        log('success');
        log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        // this.isLoginFailed = false;
        // this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getAuthorities();
        // this.reloadPage();
      },
      error => {
        log('error');
        console.log(error);
        // this.errorMessage = error.error.message;
        // this.isLoginFailed = true;
      }
    );
  }

  request() {
    this.requester.getData().subscribe(
      data => {
        log('success');
        log(data);
      },
      error => {
        log('error');
        log(error);
      }
    );
  }

}
