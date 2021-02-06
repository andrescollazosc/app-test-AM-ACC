import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../../models/project.model';
import { ProjectsMocks } from '../../mocks/projects.mock';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  public projects: ProjectModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects(): ProjectModel[] {
    debugger;
    return this.projects = ProjectsMocks.getProjectsByCustomerId(1);
  }


}
