import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TodosService} from "../services/todos.service";
import {Todo} from "../entity/todo.model";
import {ActivatedRoute} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../app.component";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtersTodos: Todo[] = [];
  userID:string
  titleFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  titleInput: string="";


  constructor(public todoService: TodosService,private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userID = this.authService.getUser()['uid']
    this.todoService.GetTodoList()
      .snapshotChanges().subscribe((todos) => {
      this.todos =[];
      this.filtersTodos =[];
      todos.forEach((item) => {
        let a = item.payload.toJSON();
        this.todos.push(a as Todo);
        this.filtersTodos.push(a as Todo);
      });
    });
  }
  changeType(type: string) {
    if (type) {
      if (type == "all"){
        this.filtersTodos = this.todos
      } else if (type == "completed") {
        this.filtersTodos = this.todos.filter((e)=>e.completed)
      } else if (type == "uncompleted") {
        this.filtersTodos = this.todos.filter((e)=>!e.completed)
      }
    }
  }

  submitTask() {
    let data:Todo = {
      userId:this.userID,
      id:12,
      title:this.titleInput,
      completed:false
    }
    this.todoService.AddTodo(data)
  }
}
