import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from '../../../pages/order-form/order-form.component';
import { FeaturesComponent } from '../../../pages/features/features.component';

@Component({
  selector: 'app-order-form-dialog',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatButtonModule, 
    MatDialogModule, 
    MatRadioModule
  ],
  templateUrl: './order-form-dialog.component.html',
  styleUrl: './order-form-dialog.component.scss',

})
export class OrderFormDialogComponent {
  selectedDrink: string = '';

  constructor(
    public dialogRef: MatDialogRef<OrderFormDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: {drinks: string[] }
  ) {}

  submit(): void {
    console.log('Selected Drink: ', this.selectedDrink);
    this.dialogRef.close(this.selectedDrink); // Close the dialog and send the selected drink back to the parent
  }
}
