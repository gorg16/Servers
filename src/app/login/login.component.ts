import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {User} from '../servers/user.modal';

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
    // const {value} = this.loginForm.get('email');
    // console.log(this.authService.getUsers());
    // if (value === this.users[0].userEmail) {
    this.storageUsers = localStorage.getItem('Users');
    if (this.storageUsers) {
    this.storageUsers = JSON.parse(this.storageUsers);
    this.currentUser = this.storageUsers.find((r) => {
     return r.email === this.loginForm.get('email').value &&
      r.password === this.loginForm.get('password').value;
      });
    }
    if (this.currentUser) {
      console.log(this.currentUser, 'this.currentUser');
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this.router.navigate(['/servers']);
    }
    // //const currentUser = users.find()
    // for (const user of users) {
    //   console.log(users[user]);
    //    // if (user) // user === login linox userin
    //    // {
    //     // login anel
    //   this.router.navigate(['/servers']);
    //
    //    // }
    // }
    // console.log((localStorage.getItem('Users')));
    if (localStorage.getItem('Users')) {
    // this.router.navigate(['/servers']);
   }
  }

}
