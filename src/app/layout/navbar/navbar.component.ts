import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import Angular Material Toolbar
import { HomeComponent } from '../../pages/home/home.component';
import { RouterModule } from '@angular/router';
import { MatDivider, MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule, 
    RouterModule,
    MatDividerModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class NavbarComponent {
@Input() authorName: string = '';
}
