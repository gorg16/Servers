import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {DialogSuccessComponent} from '../dialog-success/dialog-success.component';
import {ServersService} from '../servers/servers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(public dialog: MatDialog, private serversService: ServersService) { }

  serverTypes: string[] = ['WEB', 'EMAIL', 'HTTP', 'SSH'];


  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      types: new FormControl(null, Validators.required)
    });
  }


  onRegister() {
    this.serversService.serverTypes.next(this.registerForm.get('types').value);
    console.log('aaaaaaa');
    console.log(this.registerForm);
    // localStorage.setItem('name', this.registerForm.get('name').value);
    // localStorage.removeItem('name');
    // localStorage.getItem('name');

    const users = JSON.parse(localStorage.getItem('Users')) || [];

    const user = {
      name: this.registerForm.get('name').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      types: this.registerForm.get('types').value
      }
    ;
    // const data = [users, ...[user]];

    users.push(user);
    localStorage.setItem('Users', JSON.stringify(users));


    // localStorage.setItem(JSON.stringify('Users'),  data);

    console.log(users);

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogSuccessComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
