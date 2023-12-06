import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'data-by-service',
  templateUrl: './data-by-service.component.html',
  styleUrls: ['./data-by-service.component.sass']
})
export class DataByServiceComponent implements OnInit {
  localTasksOfObjects: any[] = []

  constructor( private _dataservice: DataService) {}

  ngOnInit(): void {
    this.localTasksOfObjects = this._dataservice.getTasksOfObjects()
  }

  addTask() {
    this._dataservice.addTask({ name: 'Task 6', done: false })
  }
}
