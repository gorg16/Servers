import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Server} from '../servers.modal';
import {ServersService} from '../servers.service';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from '../../local-storage.service';
import {LogsDetailsComponent} from '../table/logs-details/logs-details.component';
import {MatDialog} from '@angular/material';
import {CiCdDetailsComponent} from './ci-cd-details/ci-cd-details.component';

@Component({
  selector: 'app-ci-cd',
  templateUrl: './ci-cd.component.html',
  styleUrls: ['./ci-cd.component.css']
})
export class CiCdComponent implements OnInit, OnChanges {
  @Input() id: number;
  todolist = ['npm run test'];
  number = 1;
  server: Server;
  servers: Server[];
  checked = false;
  checkedSecond = false;
  text: string;

  constructor(private serversService: ServersService,
              private  route: ActivatedRoute,
              private dialog: MatDialog) {
  }


  ngOnInit() {
    // LocalStorageService.get('ToDo');
  }

  ngOnChanges(): void {
    this.server = this.serversService.getServer(this.id);
  }

  addNewTodo(valueTodo: string) {
    if (valueTodo) {
      this.todolist.push(valueTodo);
      // LocalStorageService.set('ToDo', valueTodo);
    }
  }

  deleteToDo(index) {
    this.todolist.splice(index, 1);
  }

  onChange() {
    this.checked = !this.checked;
  }
  onChangeSecondSlide() {
    this.checkedSecond = !this.checkedSecond;
  }

  openModal(text) {
    this.text = text;
    const dialogRef = this.dialog.open(CiCdDetailsComponent, {
      height: '99vh',
      width: '280vw',
      data: {
        text: this.text
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
}


}
