import { Component, OnInit } from '@angular/core';
import { InfoNotification } from 'src/app/models/info-notification.model';
import { UploadFile } from 'src/app/models/upload-file.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-load-file-page',
  templateUrl: './load-file-page.component.html',
  styleUrls: ['./load-file-page.component.scss'],
})
export class LoadFilePageComponent implements OnInit {
  public info: InfoNotification;

  public configNotificationFile: UploadFile;
  public configDetailNotificationFile: UploadFile;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.initializeData();
  }

  public getFileNotification(file: string | ArrayBuffer): void {
    this.info.notificationFile = file;
    console.log(this.info);
  }

  public getFileDetailNotification(file: string | ArrayBuffer): void {
    this.info.detailNotificationFile = file;
    console.log(this.info);
  }

  public uploadFiles():void {
    alert("Hello World!!!");
  }

  private initializeData(): void {
    this.getNotification();
    this.getConfigFiles();
  }

  private getNotification(): void {
    this.info = this.notificationService.getInfoNotification();
  }

  private getConfigFiles(): void {
    this.configNotificationFile = {
      label: 'Seleccionar Notificación',
      fileName: '',
    };

    this.configDetailNotificationFile = {
      label: 'Seleccionar Detalle',
      fileName: '',
    };
  }
}
