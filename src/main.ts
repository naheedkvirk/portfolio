import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './app/layout/navbar/navbar.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { AboutComponent } from './app/pages/about/about.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { HomeComponent } from './app/pages/home/home.component';
import { PortfolioComponent } from './app/pages/portfolio/portfolio.component';
import { ResumeComponent } from './app/pages/resume/resume.component';



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
