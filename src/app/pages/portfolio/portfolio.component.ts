import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PostTableComponent } from '../post-table/post-table.component';


@Component({
  selector: 'app-portfolio',
  standalone: true,  // ✅ This is important in Angular 19 for standalone components
  imports: [CommonModule, MatCardModule, PostTableComponent],  // Add necessary imports
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolioProjects = [
    {
      title: 'Angular Features',
      role: 'UI/UX Developer & Front-End Architect',
      stack: 'Angular + Angular Material, SCSS, Rest API, HttpClient.',
      highlights: [
        'Fetches data from a <b><a href="/json-api" class="bold-link">JSON API</a></b> using a service.',
        'Renders data in Material Table (mat-table)',
        'Material table extends with <b>Pagination</b>(Top, Bottom), <b>Sorting and Filtering.</b>',
      ],
    },
    {
      title: 'Design System for Enterprise Dashboard',
      role: 'UI/UX Developer & Front-End Architect',
      stack: 'Angular + Angular Material, SCSS, Figma',
      highlights: [
        'Designed and implemented a scalable design system used across 10+ internal tools.',
        'Led component architecture using Angular Material with custom theming.',
        'Improved accessibility (WCAG 2.1) and consistency across enterprise apps.',
      ],
    },
    {
      title: 'E-Commerce Mobile Web App',
      role: 'UI Developer',
      stack: 'Angular, Ionic, Material Design',
      highlights: [
        'Built a responsive, mobile-first interface for a global fashion retailer.',
        'Collaborated with UX designers to enhance customer journey and checkout flow.',
        'Increased mobile conversions by 28% post-launch.',
      ],
    },
    {
      title: 'SaaS Platform UI Revamp',
      role: 'UI/UX Consultant',
      stack: 'Angular, Tailored Design Tokens, Adobe XD',
      highlights: [
        'Reimagined the UX for a legacy B2B SaaS product with over 500 screens.',
        'Simplified complex workflows into clean, modern UI patterns.',
        'Conducted usability testing and integrated real-time feedback into sprints.',
      ],
    },
    {
      title: 'Admin Panel for Analytics Tool',
      role: 'Lead Front-End Developer',
      stack: 'Angular, D3.js, Material Design',
      highlights: [
        'Created a modular UI for real-time data visualization.',
        'Integrated dynamic charts with accessible controls.',
        'Developed reusable UI components aligned with Material standards.',
      ],
    },
    {
      title: 'Portfolio Website (You’re here!)',
      role: 'Designer + Developer',
      stack: 'Angular 19, Angular Material, SCSS',
      highlights: [
        'Designed and developed this site to showcase my skills and design approach.',
        'Fully responsive with subtle animations and a clean layout.',
        'Follows Material Design principles with personal customizations.',
      ],
    },
  ];
}
