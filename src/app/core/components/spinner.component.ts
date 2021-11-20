import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-spinner',
  template: `
  <div *ngIf="loading" class="flex justify-center items-center">
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
  </div>
  `
})
export class SpinnerComponent {
  @Input() loading = false;
}
