import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.sass']
})
export class HttpRequestComponent implements OnInit {

  starwars$!: Observable<any> 

  constructor( private _requestsService: RequestsService) { }

  ngOnInit(): void {
    this.starwars$ = this._requestsService.getWeather()
  }

}
