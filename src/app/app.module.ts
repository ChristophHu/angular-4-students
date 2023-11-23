import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './modules/01_binding/list/list.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './modules/01_binding/list/item/item.component';
import { InterpolationComponent } from './modules/01_binding/01_interpolation/interpolation.component';
import { PropertybindingComponent } from './modules/01_binding/02_propertybinding/propertybinding.component';
import { EventbindingComponent } from './modules/01_binding/03_eventbinding/eventbinding.component';
import { InputbindingComponent } from './modules/01_binding/04_inputbinding/inputbinding.component';
import { OutputbindingComponent } from './modules/01_binding/05_outputbinding/outputbinding.component';
import { InputChildComponent } from './modules/01_binding/04_inputbinding/input-child/input-child.component';
import { OutputChildComponent } from './modules/01_binding/05_outputbinding/output-child/output-child.component';

@NgModule({
  declarations: [
    AppComponent,
    // 01_binding
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    InputbindingComponent,
    InputChildComponent,
    OutputbindingComponent,
    OutputChildComponent,

    ListComponent,
      ItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
