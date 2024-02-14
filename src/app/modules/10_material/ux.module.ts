import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './01_snackbar/snackbar.component';
import { EditableTableComponent } from './03_editable-table/editable-table.component';
import { TableComponent } from './02_simple-table/table.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    SnackbarComponent,
    TableComponent,
    EditableTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule
  ],
  exports: [
    SnackbarComponent,
    TableComponent,
    EditableTableComponent
  ]
})
export class MaterialModule { }
