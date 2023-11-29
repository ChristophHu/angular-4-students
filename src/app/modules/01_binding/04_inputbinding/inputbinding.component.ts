import { Component } from '@angular/core';

@Component({
  selector: 'inputbinding',
  templateUrl: './inputbinding.component.html',
  styleUrls: ['./inputbinding.component.sass']
})
export class InputbindingComponent {
  parentVar: string = 'Input Binding Var'

  updateParent(value: string) {
    this.parentVar = value
    console.log('Parent Var: ', this.parentVar)
  }
}
