import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- import required BrowserAnimationsModule
import { AppComponent } from './app.component';
import { ListComponent } from './modules/01_binding/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './modules/01_binding/list/item/item.component';
import { InterpolationComponent } from './modules/01_binding/01_interpolation/interpolation.component';
import { PropertybindingComponent } from './modules/01_binding/02_propertybinding/propertybinding.component';
import { EventbindingComponent } from './modules/01_binding/03_eventbinding/eventbinding.component';
import { InputbindingComponent } from './modules/01_binding/04_inputbinding/inputbinding.component';
import { OutputbindingComponent } from './modules/01_binding/05_outputbinding/outputbinding.component';
import { InputChildComponent } from './modules/01_binding/04_inputbinding/input-child/input-child.component';
import { OutputChildComponent } from './modules/01_binding/05_outputbinding/output-child/output-child.component';
import { SnackbarComponent } from './modules/10_material/01_snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SimpleFormComponent } from './modules/02_forms/01_template_driven/01_simple-form/simple-form.component';
import { TwoWayComponent } from './modules/02_forms/01_template_driven/02_two-way/two-way.component';
import { WeitereComponent } from './modules/02_forms/01_template_driven/03_weitere/weitere.component';
import { AllgemeinComponent } from './modules/02_forms/02_reactive/01_allgemein/allgemein.component';

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

    // 10_material
    SnackbarComponent,

    ListComponent,
      ItemComponent,

    // 02_forms
    SimpleFormComponent,
    TwoWayComponent,
    WeitereComponent,
    AllgemeinComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
