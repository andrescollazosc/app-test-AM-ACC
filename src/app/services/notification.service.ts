import { Injectable } from '@angular/core';
import { InfoNotification } from '../models/info-notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _infoNotification : InfoNotification;

  public getInfoNotification() : InfoNotification {
    return this._infoNotification;
  }

  public setInfoNotification(infoNotification : InfoNotification) {
    this._infoNotification = infoNotification;
  }
}