import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenu } from '../../models';
import { MENUSIDE } from './menu';
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

  menus: IMenu[];
  constructor() {
    this.menus = MENUSIDE;
  }

  /**
   * Open sidebar
   */
  toggle() {
    this.sidebarEmit.emit(false);
  }

  /**
   * Menu
   * @param value
   */
  handleMenu(value: IMenu) {
    for (const iterator of this.menus) {
      if (value !== iterator) {
        iterator.isActive = false;
        continue;
      };
      iterator.isActive = true;
    }
  }
}
