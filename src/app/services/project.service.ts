import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectCampaigns } from '../models/project.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private URL_API = environment.path_api;

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<ProjectCampaigns[]> {
    return this.http.get<ProjectCampaigns[]>(`${ this.URL_API }projectcampaign/all`);
  }

}
