import { ChangeDetectionStrategy, Component, ElementRef, afterNextRender, viewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './cursor.css',
  template: `
    <div #dot class="cursor-dot" aria-hidden="true"></div>
    <div #ring class="cursor-ring" aria-hidden="true"></div>
  `,
})
export class CursorComponent {
  private readonly dotRef = viewChild<ElementRef>('dot');
  private readonly ringRef = viewChild<ElementRef>('ring');

  constructor() {
    afterNextRender(() => {
      if (!window.matchMedia('(pointer: fine)').matches) return;

      const dot = this.dotRef()!.nativeElement as HTMLElement;
      const ring = this.ringRef()!.nativeElement as HTMLElement;

      let mx = 0, my = 0;
      let rx = 0, ry = 0;
      let ready = false;

      document.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;

        if (!ready) {
          rx = mx;
          ry = my;
          ready = true;
          dot.style.opacity = '1';
          ring.style.opacity = '1';
        }

        dot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
      }, { passive: true });

      const animate = () => {
        rx += (mx - rx) * 0.13;
        ry += (my - ry) * 0.13;
        ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);

      document.addEventListener('mouseover', (e) => {
        if ((e.target as Element).closest('a, button')) {
          dot.classList.add('is-hovering');
          ring.classList.add('is-hovering');
        }
      });

      document.addEventListener('mouseout', (e) => {
        if ((e.target as Element).closest('a, button')) {
          dot.classList.remove('is-hovering');
          ring.classList.remove('is-hovering');
        }
      });
    });
  }
}
