import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true
})
export class FooterComponent {
  @Input() authorName: string = '';
  currentYear = new Date().getFullYear();
  rightReserved = 'All rights Reserved';
  linkedinUrl: string = 'https://www.linkedin.com/in/naheed-virk';

}
