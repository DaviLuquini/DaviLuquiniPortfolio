import { Injectable, effect, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>('light');

  constructor() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme | null;
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      this.theme.set(stored ?? (prefersDark ? 'dark' : 'light'));

      effect(() => {
        const value = this.theme();
        document.documentElement.dataset['theme'] = value;
        localStorage.setItem('theme', value);
      });
    }
  }

  toggle(): void {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('theme-transitioning');
      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
      }, 300);
    }
    this.theme.update(t => (t === 'light' ? 'dark' : 'light'));
  }
}
