import { Component } from '@angular/core';

@Component({
  selector: 'two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.sass']
})
export class TwoWayComponent {
  task: { title: string; description: string; }

  constructor() {
    this.task = { 
      title: 'Title',
      description: 'Beschreibung'
    }
  }

  saveTask(value: any) {
    this.task = value;
  }
}
