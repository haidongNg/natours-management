import { Component, Input } from '@angular/core';
import { IDropdown } from '../models';
@Component({
  selector: 'app-dropdown',
  template: `
  <div class="relative">
    <button class="flex items-center space-x-2 relative focus:outline-none" (click)="dropdownOpen = !dropdownOpen">
      <h2 class="text-gray-700 dark:text-gray-300 text-sm hidden sm:block">{{dropName}}</h2>
      <img class="h-9 w-9 rounded-full border-2 border-purple-500 object-cover" *ngIf="urlImg !== ''"
        [src]="urlImg"
        alt="Your avatar">
    </button>
    <div class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10" (click)="dropdownOpen = false" *ngIf="dropdownOpen"
        x-transition:enter="transition ease-out duration-100 transform" x-transition:enter-start="opacity-0 scale-95"
        x-transition:enter-end="opacity-100 scale-100" x-transition:leave="transition ease-in duration-75 transform"
        x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95">
        <a *ngFor="let menu of dropMenu" class="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-600 hover:text-white" (click)="menu.handle ? menu?.handle() : null">{{menu.name}}</a>
    </div>
  </div>
  `
})
export class DropdownComponent {
  /**
   * open
   */
  dropdownOpen = false;

  /**
   * image
   */
  @Input() urlImg = '';

  /**
   * name
   */
  @Input() dropName = '';

  /**
   * list menu
   */
  @Input() dropMenu: IDropdown[] = [];
}
