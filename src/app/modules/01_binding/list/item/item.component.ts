import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent {
  @Input() inputItem: any = {}
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>()

  delete() {
    this.deleteEvent.emit(this.inputItem.id)
  }
}
