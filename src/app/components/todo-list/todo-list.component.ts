import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  task!: task;
  tasksList: task[] = []

  ngOnInit(): void {
   this.resetForm();
  }

  addTask() {
    this.tasksList.push(this.task);
    this.resetForm();
   }
 
   editTask(index: number) {
     this.task = this.tasksList[index];
     this.deleteTask(index);
   }
 
   deleteTask(index: number) {
     this.tasksList.splice(index, 1);
   }
 
   resetForm() {
    this.task = {name: '', assign: ''};
   }
 }
 
 interface task {
  name: string;
  assign: string;
 }