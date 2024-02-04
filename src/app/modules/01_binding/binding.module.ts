import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './01_interpolation/interpolation.component';
import { PropertybindingComponent } from './02_propertybinding/propertybinding.component';
import { EventbindingComponent } from './03_eventbinding/eventbinding.component';
import { InputbindingComponent } from './04_inputbinding/inputbinding.component';
import { OutputbindingComponent } from './05_outputbinding/outputbinding.component';
import { InputChildComponent } from './04_inputbinding/input-child/input-child.component';
import { OutputChildComponent } from './05_outputbinding/output-child/output-child.component';

@NgModule({
  declarations: [
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    InputbindingComponent,
    InputChildComponent,
    OutputbindingComponent,
    OutputChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    InputbindingComponent,
    InputChildComponent,
    OutputbindingComponent,
    OutputChildComponent
  ]
})
export class BindingModule { }
