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
      title: new FormControl('TITEL'),
      // description: new FormControl(''), 
      // favorite: new FormControl(false), 
      // state: new FormControl('BACKLOG'), 
      // tags: new FormArray([
      //   new FormGroup({
      //     label: new FormControl('')
      //   })
      // ]),
      // assignee: new FormGroup({ 
      //   name: new FormControl(''), 
      //   email: new FormControl('')
      // }),
    });
  }

  saveTask(value: any) {
    console.log(value)
    this.task = value;
  }
}
