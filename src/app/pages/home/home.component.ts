import { Component,} from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {
  authorName = 'Naheed Virk';
  authorInfo = 'UI/UX Developer passionate about beautiful and functional design.';

}
