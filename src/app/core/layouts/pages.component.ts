import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-pages',
  template: `
  <div>
    <div class="flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto">
    <!-- Start navbar -->
    <app-sidebar [sidebarOpen]="sidebarOpen" (sidebarEmit)="toggleSidebar($event)"></app-sidebar>
    <!-- End navber -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Start header -->
      <app-header [sidebarOpen]="sidebarOpen" (sidebarEmit)="toggleSidebar($event)"></app-header>
      <!-- End header -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="container mx-auto px-6 py-8">
            <!--Start content -->
            <router-outlet></router-outlet>
            <!--End content -->
        </div>
       </main>
      </div>
    </div>
  </div>
  `
})
export class PagesComponent {
  sidebarOpen = false;

  /**
   * Emit header
   *
   * @param isOpen bool
   */
  toggleSidebar(isOpen: boolean) {
    this.sidebarOpen = isOpen;
  }
}
