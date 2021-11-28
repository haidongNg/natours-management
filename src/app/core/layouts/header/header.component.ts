import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdown } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropMenu: IDropdown[];
  darkMode = false;

  /**
   * Input
   */
  @Input() sidebarOpen = false;

  /**
   * Output emit
   */
  @Output() sidebarEmit: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(private _authService: AuthService) {
    this.dropMenu = [{ name: 'Profile' }, { name: 'Tickets' }, { name: 'Logout', handle: () => _authService.logout() }];
  }

  ngOnInit(): void {
  }

  /**
   * Open sidebar
   */
  toggle() {
    this.sidebarEmit.emit(true);
  }


}
