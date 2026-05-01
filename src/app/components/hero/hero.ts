import { ChangeDetectionStrategy, Component, afterNextRender, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  imports: [NgOptimizedImage],
})
export class HeroComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly techs = ['C#', '.NET', 'Java', 'Angular', 'React', 'TypeScript', 'AWS', 'Azure'];

  private readonly roles = ['Fullstack', 'Backend', 'Frontend'];

  protected readonly typedRole = signal(this.roles[0]);
  protected readonly cursorVisible = signal(true);
  protected readonly cursorBlink = signal(true);

  private roleIndex = 0;
  private charIndex = this.roles[0].length;
  private isDeleting = false;

  constructor() {
    afterNextRender(() => {
      setTimeout(() => {
        this.isDeleting = true;
        this.tick();
      }, 2500);
    });
  }

  private tick(): void {
    const current = this.roles[this.roleIndex];

    if (this.isDeleting) {
      this.cursorVisible.set(false);
      this.cursorBlink.set(false);
      this.charIndex--;
      this.typedRole.set(current.slice(0, this.charIndex));
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        setTimeout(() => this.tick(), 300);
        return;
      }
      setTimeout(() => this.tick(), 45);
    } else {
      this.cursorVisible.set(true);
      this.cursorBlink.set(false);
      this.charIndex++;
      this.typedRole.set(this.roles[this.roleIndex].slice(0, this.charIndex));
      if (this.charIndex === this.roles[this.roleIndex].length) {
        this.cursorBlink.set(true);
        setTimeout(() => {
          this.isDeleting = true;
          this.tick();
        }, 2200);
        return;
      }
      setTimeout(() => this.tick(), 80);
    }
  }
}
