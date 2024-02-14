import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.sass']
})
export class EditableTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'}
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  @ViewChild(MatSort) sort!: MatSort

  editableTable: FormGroup

  constructor(private _formBuilder: FormBuilder) {
    this.editableTable = _formBuilder.group({
      editable: [false],
    })
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }
}
