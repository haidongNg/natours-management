import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  /**
   * Input
   */
  @Input() sidebarOpen = false;

  /**
   * Output emit
   */
  @Output() sidebarEmit: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  open = false;

  constructor() {}

  /**
   * Open sidebar
   */
  toggle() {
    this.sidebarEmit.emit(false);
  }
}
