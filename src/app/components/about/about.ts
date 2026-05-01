import { ChangeDetectionStrategy, Component, ElementRef, WritableSignal, afterNextRender, signal, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.css',
  imports: [NgOptimizedImage],
})
export class AboutComponent {
  private readonly statsRef = viewChild<ElementRef>('statsSection');

  protected readonly yearsCount = signal(0);
  protected readonly projectsCount = signal(0);
  protected readonly linesCount = signal(0);

  private statsAnimated = false;

  constructor() {
    afterNextRender(() => {
      const el = this.statsRef()?.nativeElement;
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !this.statsAnimated) {
            this.statsAnimated = true;
            this.animateCounter(this.yearsCount, 3, 1400);
            this.animateCounter(this.projectsCount, 30, 1400);
            this.animateCounter(this.linesCount, 100, 1600);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
    });
  }

  private animateCounter(counter: WritableSignal<number>, target: number, duration: number): void {
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.set(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

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
