import { Component } from '@angular/core';

@Component({
  selector: 'eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.sass']
})
export class EventbindingComponent {
  title: string = 'Event Binding'

  clickEvent() {
    alert('clickEvent() ausgeführt!')
  }
}
