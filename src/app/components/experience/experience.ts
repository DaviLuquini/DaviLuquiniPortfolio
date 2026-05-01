import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  highlight: string;
  current: boolean;
}

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly jobs: Job[] = [
    {
      company: 'SporTI',
      role: 'Fullstack Developer',
      period: 'Nov 2025',
      location: 'Remote',
      bullets: [
        'Developing new screens and flows on the platform using ASP.NET MVC, ensuring continuous improvement of system functionality and user experience.',
        'Leading the migration of legacy ASP.NET MVC projects to Angular v20, modernizing the architecture, separating responsibilities, and delivering improvements in performance, maintainability, and scalability.',
      ],
      highlight: 'Angular v20 Migration Lead',
      current: true,
    },
    {
      company: 'INNOVT',
      role: 'Fullstack Developer',
      period: 'Sep 2023 – Nov 2025',
      location: 'Remote',
      bullets: [
        'Backend: Designed and implemented robust REST APIs using C# (.NET/ASP.NET) with serverless AWS architecture (Lambda, API Gateway, S3). Increased test coverage to 85%+ using nUnit/Selenium and established CI/CD pipelines.',
        'Frontend: Led end-to-end development of an SPA platform using Angular and TypeScript, delivering high-performance and highly usable interfaces for students.',
      ],
      highlight: '85%+ Test Coverage',
      current: false,
    },
  ];

  protected readonly education = {
    institution: 'Catholic University of Salvador',
    degree: "Bachelor's in Software Engineering",
    period: 'Jan 2023 – 2027',
  };
}
