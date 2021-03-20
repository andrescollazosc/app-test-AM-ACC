import { Component, OnInit } from '@angular/core';
import { InfoNotification } from 'src/app/models/info-notification.model';
import { UploadFile } from 'src/app/models/upload-file.model';
import { NotificationService } from '../../services/notification.service';
import { ProcessSendService } from '../../services/process-send.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ButtonModel } from 'src/app/models/button.model';
import { Functions } from '../../util/functions';
import { IconClassEnum } from 'src/app/enum/icon-class.enum';

@Component({
  selector: 'app-load-file-page',
  templateUrl: './load-file-page.component.html',
  styleUrls: ['./load-file-page.component.scss'],
})
export class LoadFilePageComponent implements OnInit {
  public info: InfoNotification;

  public configNotificationFile: UploadFile;
  public configDetailNotificationFile: UploadFile;
  public response: any;
  public setUpButton: ButtonModel;

  constructor(
    private notificationService: NotificationService,
    private proccessSend: ProcessSendService,
    private router: Router
  ) {}

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

  public uploadFiles(): void {
    debugger;
    this.proccessSend.saveProcess(this.info)
    .pipe(finalize(()=>{
      console.log(this.response);
    }))
    .subscribe((result) => {
      this.response = result;
    }, error => {
      console.log('This is our error:', error);      
      this.router.navigate(['error']);
    });
  }

  private initializeData(): void {
    this.getNotification();
    this.getConfigFiles();
    this.configButton();
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

  private configButton(): void {
    this.setUpButton = Functions.configButton(IconClassEnum.fileUpLoad, 'Cargar data');
  }
}
