import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrderFormDialogComponent } from '../../componet/dialogs/order-form-dialog/order-form-dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatDialogModule, 
    OrderFormDialogComponent,
  ],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss',

})
export class OrderFormComponent {
  drinks = ['Tea', 'Coffee', 'Juice', 'Water', 'Coke'];

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    /*
    // following just opens the dialog in orderformdialogcomponent
     this.dialog.open(OrderFormDialogComponent, {
      data: { drinks: this.drinks } //// Pass the drinks array to the dialog
    }); 
    */

    //This return the selected drink using the dialogRef.close() method. This will send the data back to the parent component.
    const dialogRef = this.dialog.open(OrderFormDialogComponent, {
      data: { drinks: this.drinks }
    }); 
    dialogRef.afterClosed().subscribe((selectedDrink: string) => {
      // Log the selected drink when the dialog is closed
      console.log('Parent received selected drink:', selectedDrink);
    }

    )
  }
}
