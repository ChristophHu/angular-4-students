import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsService } from './services/requests.service';
import { HttpRequestComponent } from './components/http-request/http-request.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    HttpRequestComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpRequestComponent
  ],
  providers: [
    RequestsService
  ]
})
export class HttpRequestModule { }
