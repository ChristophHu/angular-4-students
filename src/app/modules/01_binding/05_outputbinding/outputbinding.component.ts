import { Component } from '@angular/core';

@Component({
  selector: 'outputbinding',
  templateUrl: './outputbinding.component.html',
  styleUrls: ['./outputbinding.component.sass']
})
export class OutputbindingComponent {
  checkedEvent: boolean = false

  parentFunction(event: any) {
    console.log('parentFunction(): ', event)
    this.checkedEvent = event
  }
}
