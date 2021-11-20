import { Injectable } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { Notification, NotificationType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private subject = new Subject<Notification>();
  private defaultId = 'default-aler';
  constructor() { }

  // enable subscribing to Notification observable
  onNotification(id = this.defaultId): Observable<Notification> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  // convenience methods
  success(message: string, options?: any) {
    this.notification(new Notification({ ...options, type: NotificationType.Success, message }));
  }
  error(message: string, options?: any) {
    this.notification(new Notification({ ...options, type: NotificationType.Error, message }));
  }

  info(message: string, options?: any) {
    this.notification(new Notification({ ...options, type: NotificationType.Info, message }));
  }

  warn(message: string, options?: any) {
    this.notification(new Notification({ ...options, type: NotificationType.Warning, message }));
  }

  // main notification method
  notification(alert: Notification) {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  // clear notification
  clear(id = this.defaultId) {
    this.subject.next(new Notification({ id }));
  }
}
