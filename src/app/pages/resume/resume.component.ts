// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-resume',
//   imports: [],
//   templateUrl: './resume.component.html',
//   styleUrl: './resume.component.scss'
// })
// export class ResumeComponent {

// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-resume',
  standalone: true,  // This marks the component as standalone
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],  // Necessary imports for Material components
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {}
