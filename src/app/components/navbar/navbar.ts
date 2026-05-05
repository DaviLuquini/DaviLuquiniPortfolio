import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  private readonly langService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);
  protected readonly t = this.langService.t;
  protected readonly lang = this.langService.lang;
  protected readonly theme = this.themeService.theme;
  protected readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  toggleLang(): void {
    this.langService.toggle();
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
