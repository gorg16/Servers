import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ci-cd',
  templateUrl: './ci-cd.component.html',
  styleUrls: ['./ci-cd.component.css']
})
export class CiCdComponent implements OnInit {
  todolist = ['npm run test'];
  number = 1;
  constructor() {
  }


  ngOnInit() {
      }

  addNewTodo(valueTodo: string) {
    if (valueTodo) {
      this.todolist.push(valueTodo);
    }
  }

  deleteToDo(index) {
    this.todolist.splice(index, 1);
  }

}
