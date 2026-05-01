import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  private readonly langService = inject(LanguageService);
  protected readonly t = this.langService.t;
  protected readonly lang = this.langService.lang;
  protected readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  toggleLang(): void {
    this.langService.toggle();
  }
}
