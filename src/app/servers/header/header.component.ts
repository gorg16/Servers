import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usernaeme: any;
  storageUsers: any;
  currentUserName: any;
  constructor() { }

  ngOnInit() {
    this.currentUserName = JSON.parse(localStorage.getItem('currentUser')).name;
    // this.storageUsers = localStorage.getItem('Users');
    // if (this.storageUsers) {
    //   this.storageUsers = JSON.parse(this.storageUsers);
    //   this.currentUserName = this.storageUsers.find((r) => {
    //     return r.name ;
    //   });
    // }
    // console.log(this.currentUserName);
  }


  onLogOut() {
  localStorage.removeItem('currentUser');
  }


}
