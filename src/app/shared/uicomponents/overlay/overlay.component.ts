import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overlay',
  template: `
    <div class="overlay" [style.top]="top" [style.left]="left" [style.width]="width" [style.height]="height">
      <div class="content">
        {{ content }}
      </div>
    </div>
  `,
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  @Input() top: string;
  @Input() left: string;
  @Input() width: string;
  @Input() height: string;
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}