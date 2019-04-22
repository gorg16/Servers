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
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.users = this.authService.getUsers();
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onLogIn() {
    // const {value} = this.loginForm.get('email');
    // console.log(this.authService.getUsers());
    // if (value === this.users[0].userEmail) {
    this.router.navigate(['/servers']);
  // }
  }

}
