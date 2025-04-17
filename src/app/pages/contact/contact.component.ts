import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatInputModule, 
    MatIconModule, 
    MatFormFieldModule, 
    FormsModule],  // Add FormsModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactInfo = {
    name: '',
    email: '',
    message: '',
  };

  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('Form Submitted:', this.contactInfo);

    // TODO: Implement form submission logic (send to server)
    this.http.post('/api/send-email', this.contactInfo).subscribe({
      next: () => {
        /* this.successMessage = 'Message sent successfully';
        this.errorMessage = '';
        this.contactInfo = { name: '', email: '', message: ''}; */
        alert ('Message sent successfully');
      },
      error: (err) => {
        console.log('Email send error:', err);
        /* this.errorMessage = 'Failed to send message.';
        this.successMessage = ''; */
        alert ('Failed to send Message.');
      },
    });
  }
}
