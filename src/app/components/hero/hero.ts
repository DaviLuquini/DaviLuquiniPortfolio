import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  imports: [NgOptimizedImage],
})
export class HeroComponent {
  protected readonly techs = ['C#', '.NET', 'Java', 'Angular', 'React', 'TypeScript', 'AWS', 'Azure'];
}
