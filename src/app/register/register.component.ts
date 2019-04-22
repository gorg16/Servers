import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {DialogSuccessComponent} from '../dialog-success/dialog-success.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(public dialog: MatDialog) { }

  serverTypes: string[] = ['Web', 'email', 'http', 'ssh'];


  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      types: new FormControl(null, Validators.required)
    });
  }


  onRegister() {
    console.log('aaaaaaa');
    console.log(this.registerForm);
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
