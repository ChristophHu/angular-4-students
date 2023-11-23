import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.sass']
})
export class InputChildComponent {
  @Input() inputVar: string = ''
}
