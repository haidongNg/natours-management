import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Notification, NotificationType } from '../models';
import { NotificationService } from '../services';
@Component({
  selector: 'app-notification',
  template: `
  <div class="flex flex-col pt-2 h-96 overflow-hidden absolute top-0 right-0">
    <div class="my-2" *ngFor="let noti of notifications" (click)="removeNotification(noti)">
      <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-center w-12" [ngClass]="cssNotification(noti.type)">
         <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
          </svg>
        </div>
        <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
            <span class="font-semibold dark:text-green-400" [ngClass]="cssNotification(noti.type, true)">{{getTitle(noti.type) }}</span>
            <p class="text-sm text-gray-600 dark:text-gray-200">
              {{noti.message}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() id = 'default-aler';
  @Input() fade = true;

  /**
   * List noti
   */
  notifications: Notification[] = [];

  /**
   * Subscript
   */
  notificationSubscription?: Subscription;
  routeSubscription?: Subscription;

  constructor(private _notificationService: NotificationService, private _router: Router) { }

  ngOnInit() {
    // subscribe to new alert notifications
    this.notificationSubscription = this._notificationService.onNotification(this.id)
      .subscribe((noti) => {
        if (!noti.message) {
          // filter out notifications without 'keepAfterRouteChange' flag
          this.notifications = this.notifications.filter(x => x.keepAfterRouteChange);

          // remove 'keepAfterRouteChange' flag on the rest
          this.notifications.forEach(x => x.keepAfterRouteChange);
          return;
        }

        this.notifications.push(noti);

        // auto close notification if required
        if (noti.autoClose) {
          setTimeout(() => this.removeNotification(noti), 3000);
        }
      });

    // clear notification on location change
    this.routeSubscription = this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this._notificationService.clear(this.id);
      }
    });
  }

  ngOnDestroy() {
    this.notificationSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
  }

  /**
   * Remove notification
   *
   * @param noti
   * @returns
   */
  removeNotification(noti: Notification) {
    // check if already removed to prevent error on auto close
    if (!this.notifications.includes(noti)) return;

    if (this.fade) {
      // fade out notification
      this.notifications.find(x => x === noti);


      // remove notification after faded out
      setTimeout(() => {
        this.notifications = this.notifications.filter(x => x !== noti);
      }, 250);
    } else {
      // remove notification
      this.notifications = this.notifications.filter(x => x !== noti);
    }
  }

  /**
   * Css
   *
   * @param type
   * @param textBool
   * @returns
   */
  cssNotification(type = 0, textBool = false) {
    if (textBool) {
      return {
        'text-green-500': type === 0 ? true : false,
        'text-red-500': type === 1 ? true : false,
        'text-blue-500': type === 2 ? true : false,
        'text-yellow-500': type === 3 ? true : false,
      }
    }
    return {
      'bg-green-500': type === 0 ? true : false,
      'bg-red-500': type === 1 ? true : false,
      'bg-blue-500': type === 2 ? true : false,
      'bg-yellow-500': type === 3 ? true : false,
    }
  }

  /**
   * Get title Code
   *
   * @param type
   * @returns
   */
  getTitle(type: NotificationType = 0): string {
    return type === 0 ? 'Success' : type === 1 ? 'Error' : type === 2 ? 'Info' : 'Warning';
  }
}


