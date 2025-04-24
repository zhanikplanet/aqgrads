import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sponsor } from './sponsors.model';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
  imports: [CommonModule]
})
export class SponsorsComponent {
  sponsors: Sponsor[] = [
    {
      name: 'TechCorp',
      logo: 'https://via.placeholder.com/150x80/2563eb/ffffff?text=TechCorp',
      contribution: 'Technology Partner',
      description: 'Providing cutting-edge educational technology solutions.',
      website: 'https://techcorp.example.com'
    },
    {
      name: 'EduTech',
      logo: 'https://via.placeholder.com/150x80/7c3aed/ffffff?text=EduTech',
      contribution: 'Educational Resources',
      description: 'Supporting digital learning initiatives and resource development.',
      website: 'https://edutech.example.com'
    },
    {
      name: 'Future Labs',
      logo: 'https://via.placeholder.com/150x80/e11d48/ffffff?text=FutureLabs',
      contribution: 'Innovation Partner',
      description: 'Advancing STEM education through innovative programs.',
      website: 'https://futurelabs.example.com'
    },
    {
      name: 'Innovation Inc',
      logo: 'https://via.placeholder.com/150x80/0891b2/ffffff?text=Innovation',
      contribution: 'Research Support',
      description: 'Funding breakthrough research projects and student initiatives.',
      website: 'https://innovation.example.com'
    },
    {
      name: 'Global Ed',
      logo: 'https://via.placeholder.com/150x80/ca8a04/ffffff?text=GlobalEd',
      contribution: 'International Programs',
      description: 'Facilitating global exchange programs and cultural initiatives.',
      website: 'https://globaled.example.com'
    },
    {
      name: 'Learn Co',
      logo: 'https://via.placeholder.com/150x80/4d7c0f/ffffff?text=LearnCo',
      contribution: 'Scholarship Funding',
      description: 'Providing educational opportunities through scholarships.',
      website: 'https://learnco.example.com'
    }
  ];
}
