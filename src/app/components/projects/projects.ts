import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  accent: string;
}

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  protected readonly projects: Project[] = [
    {
      title: 'RickAndMortyDle',
      period: '2024 – 2025',
      description: 'A Dle-style guessing game inspired by Loldle, using the public Rick and Morty API. Features an Angular SPA with a modular .NET backend following DDD/SOLID principles, JWT authentication, PostgreSQL storage, and Docker deployment.',
      tags: ['Angular', 'TypeScript', 'C#', 'ASP.NET', 'PostgreSQL', 'Docker', 'JWT'],
      link: 'https://rickandmortydle.com/',
      repo: 'https://github.com/DaviLuquini/RickAndMortyDle',
      accent: '#FF6B7A',
    },
    {
      title: 'RealtimeAudioBot',
      period: '2025 – 2026',
      description: 'Open-source platform for technical and English assessment (ExamCreator). Wizard-style flow with browser audio recording and real-time AI conversation. Uses SignalR for live communication and the OpenAI API for AI-based assessments.',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'SignalR', '.NET', 'AWS Lambda', 'OpenAI'],
      repo: 'https://github.com/DaviLuquini/RealtimeAudioBot',
      accent: '#2F81F7',
    },
  ];
}
