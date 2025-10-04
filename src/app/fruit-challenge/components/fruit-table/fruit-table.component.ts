import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FruitTableViewModel} from './fruit-table-view-model';
import {FruitDialogComponent} from '../fruit-dialog/fruit-dialog.component';
import { Fruit } from '../../models/fruit';

@Component({
  selector: 'app-fruit-table',
  templateUrl: './fruit-table.component.html',
  styleUrls: ['./fruit-table.component.scss'],
  providers: [FruitTableViewModel]
})
export class FruitTableComponent implements OnInit {
  columnsToDisplay = ['id', 'name', 'genus', 'calories', 'carbohydrates', 'sugar'];

  constructor(
    public viewModel: FruitTableViewModel,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  onFilterChange(event: any): void {
    this.viewModel.updateFilter(event.target.value);
  }

  onSortChange(sortOption: string): void {
    this.viewModel.updateSort(sortOption);
  }

  onRowClick(fruit: Fruit): void {
    this.dialog.open(FruitDialogComponent, {
      data: fruit,
      width: '90vw',
      maxWidth: '600px',
      maxHeight: '90vh',
      panelClass: 'fruit-dialog-container',
      disableClose: false,
      autoFocus: false
    });
  }
}