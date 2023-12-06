import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataByServiceComponent } from './component/data-by-service.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    DataByServiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataByServiceComponent
  ],
  providers: [
    DataService
  ]
})
export class DataByServiceModule { }
