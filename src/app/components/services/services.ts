import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  isCta: boolean;
}

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.html',
})
export class ServicesComponent {
  protected readonly t = inject(LanguageService).t;

  protected getTagBg(accent: string): string {
    return `color-mix(in srgb, ${accent} 18%, var(--color-surface))`;
  }

  protected readonly services: Service[] = [
    {
      number: '01',
      title: 'Backend Development',
      description: 'Robust REST APIs with C# and .NET, serverless AWS architecture (Lambda, API Gateway, S3), and clean architecture patterns — DDD and SOLID. Test coverage above 85%.',
      tags: ['C#', 'Java', '.NET', 'AWS', 'REST APIs', 'ASP.NET'],
      accent: '#0D9488',
      isCta: false,
    },
    {
      number: '02',
      title: 'Frontend Development',
      description: 'High-performance SPAs with Angular and React. Scalable component architecture, TypeScript, and engaging, accessible user experiences.',
      tags: ['Angular', 'React', 'TypeScript', 'Next.js'],
      accent: '#F97316',
      isCta: false,
    },
    {
      number: '03',
      title: 'Cloud & DevOps',
      description: 'CI/CD pipelines, Docker containerization, and cloud deployment on AWS and Azure. Reliable infrastructure for scalable, production-ready systems.',
      tags: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'CI/CD'],
      accent: '#7C3AED',
      isCta: false,
    },
    {
      number: '04',
      title: "Let's work together",
      description: "Got a project in mind? I'd love to help you build something great — from API design to pixel-perfect UI.",
      tags: [],
      accent: '#000000',
      isCta: true,
    },
  ];
}
