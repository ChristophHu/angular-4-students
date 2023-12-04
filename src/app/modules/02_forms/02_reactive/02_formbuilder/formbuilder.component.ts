import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.sass']
})
export class FormbuilderComponent {
  taskForm: FormGroup

  constructor(private _formBuilder: FormBuilder) {
    this.taskForm = _formBuilder.group({
      title: ['Titel'],
      description: ['Beschreibung'],
      favorite: [''],
      state: ['BACKLOG'],
      tags: _formBuilder.array([ 
        _formBuilder.group({
          label: ['']
        })
      ]),
      assignee: _formBuilder.group({
        name: ['Name'],
        email: ['name@mail.com'], })
    });
  }
}
