import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoNotification } from 'src/app/models/info-notification.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessSendService {
  constructor(private http:HttpClient) { }

  public saveProcess(process: InfoNotification):Observable<any> {

    return this.http.post("http://localhost:51199/api/process/save-process",process);
  }
}
