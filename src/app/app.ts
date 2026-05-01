import { ChangeDetectionStrategy, Component, afterNextRender, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { FooterComponent } from './components/footer/footer';
import { CursorComponent } from './components/cursor/cursor';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
    CursorComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly scrollProgress = signal(0);

  constructor() {
    afterNextRender(() => {
      window.addEventListener('scroll', () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        this.scrollProgress.set(max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0);
      }, { passive: true });

      document.querySelectorAll('[data-reveal]').forEach((el) => {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const elem = entry.target as HTMLElement;
            const siblings = Array.from(
              elem.parentElement?.querySelectorAll('[data-reveal]') ?? []
            );
            const idx = siblings.indexOf(elem);
            elem.style.transitionDelay = `${idx * 0.08}s`;
            elem.classList.add('revealed');
            obs.unobserve(elem);
          });
        }, { threshold: 0.1 });
        obs.observe(el);
      });

      const expEl = document.getElementById('experience') as HTMLElement | null;
      if (expEl) {
        expEl.addEventListener('mousemove', (e: MouseEvent) => {
          const r = expEl.getBoundingClientRect();
          expEl.style.setProperty('--mx', `${e.clientX - r.left}px`);
          expEl.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
      }
    });
  }
}
