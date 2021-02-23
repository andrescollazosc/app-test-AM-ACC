import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectCampaigns } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<ProjectCampaigns[]> {
    return this.http.get<ProjectCampaigns[]>('http://localhost:51199/api/project/projects');
  }

}
