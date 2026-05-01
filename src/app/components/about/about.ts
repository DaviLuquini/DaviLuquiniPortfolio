import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.css',
  imports: [NgOptimizedImage],
})
export class AboutComponent {
  protected readonly rainIcons: { src: string; style: Record<string, string> }[] = [
    { src: 'claude.png',  style: { 'animation-delay': '0s',   'animation-duration': '3.2s' } },
    { src: 'codex.png',   style: { 'animation-delay': '1.1s', 'animation-duration': '2.7s' } },
    { src: 'cursor.png',  style: { 'animation-delay': '0.4s', 'animation-duration': '3.6s' } },
    { src: 'claude.png',  style: { 'animation-delay': '2.0s', 'animation-duration': '2.9s' } },
    { src: 'codex.png',   style: { 'animation-delay': '0.8s', 'animation-duration': '3.3s' } },
    { src: 'cursor.png',  style: { 'animation-delay': '1.6s', 'animation-duration': '2.6s' } },
    { src: 'claude.png',  style: { 'animation-delay': '2.8s', 'animation-duration': '3.8s' } },
    { src: 'codex.png',   style: { 'animation-delay': '0.2s', 'animation-duration': '3.1s' } },
    { src: 'cursor.png',  style: { 'animation-delay': '1.4s', 'animation-duration': '2.8s' } },
  ];

  protected readonly skills = [
    'C#', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'HTML', 'CSS',
    '.NET', 'ASP.NET', 'Angular', 'React', 'Next.js',
    'Entity Framework', 'Dapper', 'Blazor', 'nUnit', 'Selenium',
    'Docker', 'AWS', 'Azure', 'CI/CD', 'PostgreSQL',
    'SOLID', 'DDD', 'REST APIs', 'Git', 'Postman',
    'Claude Code', 'Cursor', 'Codex',
  ];
}
