import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../local-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUserName: any;
  currentUserNumber: any;
  constructor() { }

  ngOnInit() {
    this.currentUserName = JSON.parse(localStorage.getItem('currentUser')).name;
    this.currentUserNumber = LocalStorageService.get('currentNumber');
  }


  onLogOut() {
  LocalStorageService.remove('currentUser');
  LocalStorageService.remove('currentNumber');
  }


}
