import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  /**
   * Input
   */
  @Input() sidebarOpen = false;

  /**
   * Output emit
   */
  @Output() sidebarEmit: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Open sidebar
   */
  toggle() {
    this.sidebarEmit.emit(false);
  }
}
