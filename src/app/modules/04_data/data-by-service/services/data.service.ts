import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasksOfObjects: any[] = [
    { name: 'Task 1', done: false },
    { name: 'Task 2', done: true },
    { name: 'Task 3', done: false },
    { name: 'Task 4', done: true },
    { name: 'Task 5', done: false }
  ]

  constructor() { }

  getTasksOfObjects() {
    return this.tasksOfObjects
  }
  addTask(task: { name: string, done: boolean }) {
    this.tasksOfObjects.push(task)
  }
}
