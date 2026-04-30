import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
})
export class AboutComponent {
  protected readonly skills = [
    'C#', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'HTML', 'CSS',
    '.NET', 'ASP.NET', 'Angular', 'React', 'Next.js',
    'Entity Framework', 'Dapper', 'Blazor', 'nUnit', 'Selenium',
    'Docker', 'AWS', 'Azure', 'CI/CD', 'PostgreSQL',
    'SOLID', 'DDD', 'REST APIs', 'Git', 'Postman',
  ];
}
