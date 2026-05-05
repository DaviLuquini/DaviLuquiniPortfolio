import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  accent: string;
  showStats?: boolean;
}

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly projects: Project[] = [
    {
      title: 'RickAndMortyDle',
      period: '2024 – 2025',
      description: 'A Dle-style guessing game inspired by Loldle, using the public Rick and Morty API. Features an Angular SPA with a modular .NET backend following DDD/SOLID principles, JWT authentication, PostgreSQL storage, and Docker deployment.',
      tags: ['Angular', 'TypeScript', 'C#', 'ASP.NET', 'PostgreSQL', 'Docker', 'JWT'],
      link: 'https://rickandmortydle.com/',
      repo: 'https://github.com/DaviLuquini/RickAndMortyDle',
      accent: '#F97316',
      showStats: true,
    },
    {
      title: 'ThumbGerador',
      period: '2026',
      description: 'This project is an open-source template for a Landing Page and Pricing Page created with a focus on high conversion, aimed at a SaaS for creating thumbnails with AI. The project has the Landing Page and Pricing Page ready to use.',
      tags: ['HTML', 'CSS', 'JavaScript', 'High Conversion', 'Template', 'SaaS', 'AI', 'Landing Page', 'Pricing Page'],
      link: 'https://thumbgerador.com/',
      repo: 'https://github.com/DaviLuquini/ThumbGerador',
      accent: '#FF1493',
    }
    // {
    //   title: 'RealtimeAudioBot',
    //   period: '2025 – 2026',
    //   description: 'Open-source platform for technical and English assessment (ExamCreator). Wizard-style flow with browser audio recording and real-time AI conversation. Uses SignalR for live communication and the OpenAI API for AI-based assessments.',
    //   tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'SignalR', '.NET', 'AWS Lambda', 'OpenAI'],
    //   repo: 'https://github.com/DaviLuquini/RealtimeAudioBot',
    //   accent: '#0D9488',
    // },
  ];
}
