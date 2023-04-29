import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../entity/todo.model";
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/compat/database";
// const APIURL= "https://jsonplaceholder.typicode.com/"
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todosRef: AngularFireList<any>;
  todoRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  AddTodo(todo: Todo) {
    this.todosRef
      .push({
        userId: todo.userId,
        title: todo.title,
        id: todo.id,
        completed: todo.completed,
      })
      .catch((error) => {
        this.errorMgmt(error);
      });
  }
  /* Get book */
  GetTodo(id: string) {
    this.todoRef = this.db.object('todos/' + id);
    return this.todoRef;
  }
  /* Get book list */
  GetTodoList() {
    this.todosRef = this.db.list('todos');
    return this.todosRef;
  }
  /* Update book */
  UpdateTodo(id:number, todo: Todo) {
    this.todoRef
      .update({
        userId: todo.userId,
        title: todo.title,
        id: id,
        completed: todo.completed,
      })
      .catch((error) => {
        this.errorMgmt(error);
      });
  }
  /* Delete book */
  DeleteTodo(id: string) {
    this.todoRef = this.db.object('todos/' + id);
    this.todoRef.remove().catch((error) => {
      this.errorMgmt(error);
    });
  }
  // Error management
  private errorMgmt(error:any) {
    console.log(error);
  }


}
