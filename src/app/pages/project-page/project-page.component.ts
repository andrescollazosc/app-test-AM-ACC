import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../../models/project.model';
import { ProjectsMocks } from '../../mocks/projects.mock';
import { NotificationService } from 'src/app/services/notification.service';
import { CardMainModel } from '../../models/card-main.model';
import { GenericModel } from '../../models/generic.model';
import { InfoNotification } from '../../models/info-notification.model';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})

export class ProjectPageComponent implements OnInit {
  public projects: ProjectModel[] = [];
  public projectsClone: ProjectModel[] = [];
  public isLoad = true;

  constructor(private notificationService: NotificationService){}

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

  public getCampaign(campaignModel: CardMainModel, projectModel: ProjectModel) {
    const project: GenericModel={
      id: projectModel.projectId,
      description: projectModel.projectName,
    };

    const campaign: GenericModel={
      id: campaignModel.cardId,
      description: campaignModel.title
    };

    const infoNotification: InfoNotification={
      campaign,
      project,
      id: "aeiou",
    };

    this.notificationService.setInfoNotification(infoNotification);
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
