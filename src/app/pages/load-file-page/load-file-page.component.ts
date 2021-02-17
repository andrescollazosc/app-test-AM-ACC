import { Component, OnInit } from '@angular/core';
import { InfoNotification } from 'src/app/models/info-notification.model';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-load-file-page',
  templateUrl: './load-file-page.component.html',
  styleUrls: ['./load-file-page.component.scss']
})
export class LoadFilePageComponent implements OnInit {

  public info: InfoNotification;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getNotification();
  }

  private getNotification():void {
    this.info=this.notificationService.getInfoNotification();
  }

}
