import { Component, OnInit } from '@angular/core';
import { todo } from '../core/model/todo';
import { CalculServiceService } from '../core/Services/calcul-service.service';
import { TodoServiceService } from '../core/Services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist :todo[] = [];
  test : boolean = false;
  nbrTotal! : any;
  nbrTodo! : any;
  constructor(private todoS : CalculServiceService,private todoservice : TodoServiceService) { }

  affiche(){
    this.test = true;
  }

  ngOnInit(): void {
   this.todoservice.getTodos().subscribe(data => {
    this.todolist = data,
    this.nbrTotal = data.length,
    this.nbrTodo = this.todoS.getNumberOf(data,"completed",true);
  });
  }

}
