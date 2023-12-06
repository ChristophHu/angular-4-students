import { Component } from '@angular/core';

@Component({
  selector: 'localdata',
  templateUrl: './localdata.component.html',
  styleUrls: ['./localdata.component.sass']
})
export class LocaldataComponent {
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']

  tasksOfObjects: any[] = [
    { name: 'Task 1', done: false },
    { name: 'Task 2', done: true },
    { name: 'Task 3', done: false },
    { name: 'Task 4', done: true },
    { name: 'Task 5', done: false }
  ]
}
