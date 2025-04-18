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


    // TODO: Fix the server issue
    
    // Proceed with form submission
    //this.http.post('/api/send-email', this.contactInfo).subscribe({
      //this.http.post('http://localhost:3000/api/send-email', this.contactInfo).subscribe({

    //This ensures the request goes directly to the Node.js server running on port 3000
    this.http.post('http://3.133.150.108:3000/api/send-email', this.contactInfo).subscribe({
      next: () => {
        
        alert ('Message sent successfully');    
        console.log('Email sent successfully:', this.contactInfo);
        this.contactInfo = { name: '', email: '', message: ''};
      },
      error: (err) => {
        console.log('Email send error:', err);
        alert ('Failed to send Message.');
      },
    });
  }
  
}
