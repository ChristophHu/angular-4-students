import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';

@Component({
  selector: 'cmp-defer-loading',
  templateUrl: './cmp-defer-loading.component.html',
  styleUrls: ['./cmp-defer-loading.component.sass']
})
export class CmpDeferLoadingComponent implements OnInit {
  tableData: { id: string, task: string }[] = []

  private readonly _data = new BehaviorSubject<{ id: string, task: string }[]>([])
  data$: Observable<{ id: string, task: string }[]> = this._data.asObservable()

  constructor() {
    this._data.next(this.tableData)
  }

  ngOnInit(): void {
    this.tableData = [
      { id: '1', task: 'task 1' },
      { id: '2', task: 'task 2' },
      { id: '3', task: 'task 3' },
      { id: '4', task: 'task 4' },
      { id: '5', task: 'task 5' },
      { id: '6', task: 'task 6' },
      { id: '7', task: 'task 7' },
      { id: '8', task: 'task 8' },
      { id: '9', task: 'task 9' },
      { id: '10', task: 'task 10' },
    ]
    of(this.tableData)
    .pipe(delay(2000))
    .subscribe(data => {
      this._data.next(data)
    })
  }

  loadData() {
    
  }
}
