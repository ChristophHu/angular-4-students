import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.sass']
})
export class OutputChildComponent {
  @Output() sendBackEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  checked: boolean = false

  sendBackToParent() {
    this.checked = !this.checked
    this.sendBackEvent.emit(this.checked)
  }
}
