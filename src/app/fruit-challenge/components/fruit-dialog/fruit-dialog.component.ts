import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Fruit } from '../../models/fruit';

@Component({
  selector: 'app-fruit-dialog',
  templateUrl: './fruit-dialog.component.html',
  styleUrls: ['./fruit-dialog.component.scss']
})
export class FruitDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FruitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public fruit: Fruit
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
