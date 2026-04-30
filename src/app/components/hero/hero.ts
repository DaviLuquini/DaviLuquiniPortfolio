import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
})
export class HeroComponent {
  protected readonly techs = ['C#', '.NET', 'Java', 'Angular', 'React', 'TypeScript', 'AWS', 'Azure'];
}
