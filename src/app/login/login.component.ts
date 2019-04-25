import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {User} from '../servers/user.modal';
import {LocalStorageService} from '../local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  users: User[];
  @Input() user: User;
  storageUsers: any;
  currentUser: any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.users = this.authService.getUsers();
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onLogIn() {
    this.storageUsers = LocalStorageService.get('Users');
    if (this.storageUsers) {
      this.storageUsers = JSON.parse(JSON.stringify(this.storageUsers));
      this.currentUser = this.storageUsers.find((user) => {
      return user.email === this.loginForm.get('email').value &&
        user.password === this.loginForm.get('password').value;
      });
    }
    if (this.currentUser) {
      LocalStorageService.set('currentUser', this.currentUser);
      this.router.navigate(['/servers']);
    }
  }

}
