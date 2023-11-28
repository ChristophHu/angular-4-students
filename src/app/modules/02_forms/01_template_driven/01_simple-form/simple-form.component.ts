import { Component } from '@angular/core';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.sass']
})
export class SimpleFormComponent {
  task: any // { title: string; description: string; }

  saveTask(value: any) {
    this.task = value;
  }
}
