import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'allgemein',
  templateUrl: './allgemein.component.html',
  styleUrls: ['./allgemein.component.sass']
})
export class AllgemeinComponent {
  task: any
  taskForm: FormGroup;
  
  constructor() {
    this.taskForm = new FormGroup({ 
      title: new FormControl('TITELs')
    });
  }

  saveTask(value: any) {
    console.log(value)
    this.task = value;
  }
}
