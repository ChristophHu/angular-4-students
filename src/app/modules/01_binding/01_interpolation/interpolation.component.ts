import { Component } from '@angular/core';

@Component({
  selector: 'interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.sass']
})
export class InterpolationComponent {
  title: string = 'Interpolation'
  description: string = 'Die Interpolation wird genutzt um einfach Variablen (Strings, Boolean, usw.) vom Controller in der View auszugeben.'
}
