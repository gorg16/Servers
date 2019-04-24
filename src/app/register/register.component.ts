import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {DialogSuccessComponent} from '../dialog-success/dialog-success.component';
import {ServersService} from '../servers/servers.service';
import {LocalStorageService} from '../local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(public dialog: MatDialog, private serversService: ServersService, private localStorageService: LocalStorageService) { }

  serverTypes: string[] = ['WEB', 'FTP', 'SSH', 'NTP', 'POP3', 'SMTP'];


  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      types: new FormControl(null, Validators.required)
    });
  }


  onRegister() {
    // this.serversService.serverTypes.next(this.registerForm.get('types').value);
    // const users = JSON.parse(localStorage.getItem('Users')) || [];
    const users = LocalStorageService.get('Users') || [];
    const user = {
      name: this.registerForm.get('name').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      types: this.registerForm.get('types').value
      }
    ;

    users.push(user);
    LocalStorageService.set('Users', users);
    // console.log(users);

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
