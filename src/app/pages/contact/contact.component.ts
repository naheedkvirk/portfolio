import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule, FormsModule],  // Add FormsModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactInfo = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log('Form Submitted:', this.contactInfo);
    // Implement form submission logic (e.g., send to server)
  }
}
