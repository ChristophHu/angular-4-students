import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListComponent } from './modules/01_binding/list/list.component';
import { ItemComponent } from './modules/01_binding/list/item/item.component';
import { InterpolationComponent } from './modules/01_binding/01_interpolation/interpolation.component';
import { PropertybindingComponent } from './modules/01_binding/02_propertybinding/propertybinding.component';
import { EventbindingComponent } from './modules/01_binding/03_eventbinding/eventbinding.component';
import { InputbindingComponent } from './modules/01_binding/04_inputbinding/inputbinding.component';
import { OutputbindingComponent } from './modules/01_binding/05_outputbinding/outputbinding.component';
import { InputChildComponent } from './modules/01_binding/04_inputbinding/input-child/input-child.component';
import { OutputChildComponent } from './modules/01_binding/05_outputbinding/output-child/output-child.component';
import { SnackbarComponent } from './modules/10_material/01_snackbar/snackbar.component';
import { SimpleFormComponent } from './modules/02_forms/01_template_driven/01_simple-form/simple-form.component';
import { TwoWayComponent } from './modules/02_forms/01_template_driven/02_two-way/two-way.component';
import { WeitereComponent } from './modules/02_forms/01_template_driven/03_weitere/weitere.component';
import { AllgemeinComponent } from './modules/02_forms/02_reactive/01_allgemein/allgemein.component';
// import { FormbuilderComponent } from './modules/02_forms/02_reactive/02_formbuilder/formbuilder.component';
import { TableComponent } from './modules/10_material/02_simple-table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormbuilderComponent } from './modules/02_forms/02_reactive/02_formbuilder/formbuilder.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { EditableTableComponent } from './modules/10_material/03_editable-table/editable-table.component';
import { RouterlinkComponent } from './modules/03_routing/routerlink/routerlink.component';
import { RouterlinkModule } from './modules/03_routing/routerlink/routerlink.module';
import { NavigationModule } from './modules/03_routing/navigation/navigation.module';
import { ProgramaticallyModule } from './modules/03_routing/programatically/programatically.module';
import { LocaldataComponent } from './modules/04_data/localdata/localdata.component';
import { DataByServiceModule } from './modules/04_data/data-by-service/data-by-service.module';
import { HttpRequestModule } from './modules/04_data/http-request/request.module';
import { CmpDeferLoadingComponent } from './modules/05_ux/cmp-defer-loading/cmp-defer-loading.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'routerlink', component: RouterlinkComponent },
  { path: 'route00', loadChildren: () => import('./modules/03_routing/navigation/navigation.module').then(m => m.NavigationModule) }, 
  { path: 'programatically', loadChildren: () => import('./modules/03_routing/programatically/programatically.module').then(m => m.ProgramaticallyModule) },
  // { path: '', redirectTo: 'programatically', pathMatch: 'full' }
]

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

    // 02_forms
    SimpleFormComponent,
    TwoWayComponent,
    WeitereComponent,
    AllgemeinComponent,
    FormbuilderComponent,

    // 10_material
    SnackbarComponent,
    TableComponent,
    EditableTableComponent,

    ListComponent,
    ItemComponent,

    // data
    LocaldataComponent,

    // 5 ux
    CmpDeferLoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // forms
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    ReactiveFormsModule,

    // routing
    RouterModule.forRoot(routes),
    RouterlinkModule,
    // NavigationModule,
    ProgramaticallyModule,

    // data
    DataByServiceModule,
    HttpRequestModule,

    // material
    MatSnackBarModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
