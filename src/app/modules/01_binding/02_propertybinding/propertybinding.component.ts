import { Component } from '@angular/core';

@Component({
  selector: 'propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.sass']
})
export class PropertybindingComponent {
  title: string = 'Property Binding'
  propertyString: string = 'Property String vom Controller'
}
