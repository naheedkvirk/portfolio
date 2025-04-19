import { Component,} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  authorName = 'Naheed Virk';
  fromWhere = '- from Michigan';
  workSamples = 'Some of my Work Samples';
  authorInfo = 'Front-End Engineer, UI/UX Developer, Full-Stack Developer'; 
  detailedInfo = 'Passionate about beautiful and functional design.';

}