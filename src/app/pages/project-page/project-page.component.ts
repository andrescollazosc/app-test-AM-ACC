import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../../models/project.model';
import { ProjectsMocks } from '../../mocks/projects.mock';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  public projects: ProjectModel[] = [];
  public projectsClone: ProjectModel[] = [];
  public isLoad = true;

  ngOnInit(): void {
    this.getProjects();
  }

  public searchProject(term: string): void {
    this.projects =
      term.length > 0
        ? this.projects.filter((x) =>
            x.projectName.toLowerCase().match(term.toLowerCase())
          )
        : this.projectsClone;
  }

  private getProjects(): ProjectModel[] {
    setTimeout(() => {
      this.isLoad = false;
      this.projects = ProjectsMocks.getProjectsByCustomerId(1);
      this.projectsClone = [...this.projects];
    }, 1500);

    return this.projects;
  }
}
