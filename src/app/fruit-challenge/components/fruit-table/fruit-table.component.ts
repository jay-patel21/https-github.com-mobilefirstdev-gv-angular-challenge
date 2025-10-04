import { Component, OnInit } from '@angular/core';
import {FruitTableViewModel} from './fruit-table-view-model';

@Component({
  selector: 'app-fruit-table',
  templateUrl: './fruit-table.component.html',
  styleUrls: ['./fruit-table.component.scss'],
  providers: [FruitTableViewModel]
})
export class FruitTableComponent implements OnInit {
  columnsToDisplay = ['id', 'name', 'genus', 'calories', 'carbohydrates', 'sugar'];

  constructor(public viewModel: FruitTableViewModel) {

  }

  ngOnInit(): void {
  }
}
