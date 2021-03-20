import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoNotification } from 'src/app/models/info-notification.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProcessSendService {
  private URL_API = environment.path_api;

  constructor(private http: HttpClient) {}

  public saveProcess(process: InfoNotification): Observable<any> {
    return this.http.post(`${this.URL_API}process/save-process`, process);
  }
}
