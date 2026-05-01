import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly copied = signal(false);
  protected readonly easterEgg = signal(false);

  protected copyEmail(): void {
    navigator.clipboard.writeText('daviluquini7@gmail.com').then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }

  protected triggerEasterEgg(): void {
    if (this.easterEgg()) return;
    this.easterEgg.set(true);
    setTimeout(() => this.easterEgg.set(false), 3500);
  }
}
