import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdown, JWTProfile } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropMenu: IDropdown[];
  darkMode = false;
  profile: JWTProfile;

  /**
   * Input
   */
  @Input() sidebarOpen = false;

  /**
   * Output emit
   */
  @Output() sidebarEmit: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(private _authService: AuthService) {
    this.dropMenu = [{ name: 'Profile' }, { name: 'Tickets' }, { name: 'Logout', handle: () => this._authService.logout() }];
    this.profile = this._authService.profile;
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
