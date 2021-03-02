import { Component, OnInit } from '@angular/core';
import { ProjectModel, ProjectCampaigns } from '../../models/project.model';
import { NotificationService } from 'src/app/services/notification.service';
import { CardMainModel } from '../../models/card-main.model';
import { GenericModel } from '../../models/generic.model';
import { InfoNotification } from '../../models/info-notification.model';
import { ProjectService } from 'src/app/services/project.service';
import { finalize } from 'rxjs/operators';
import { CampaignModel } from '../../models/campaign.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  public projects: ProjectModel[] = [];
  public projectsClone: ProjectModel[] = [];
  public isLoad = true;
  public projectsItems: ProjectCampaigns[] = [];

  constructor(
    private notificationService: NotificationService,
    private projectService: ProjectService,
    private router: Router
  ) {}

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

  public getCampaign(campaignModel: CardMainModel, project: ProjectModel) {
    
    const campaign: CampaignModel = {
      id: campaignModel.cardId,
      campaignName: campaignModel.title,
      projectId: null
    };

    const infoNotification: InfoNotification = {
      campaign,
      project,
      id: 'aeiou',
    };

    this.notificationService.setInfoNotification(infoNotification);
  }

  private getProjects(): void {
    this.projectService
      .getProjects()
      .pipe(
        finalize(() => {
          this.isLoad = false;
          this.mapProjects();
          this.projectsClone = [...this.projects];
        })
      )
      .subscribe((result) => {
        this.projectsItems = result;
      }, error => {
        console.error('Ocurrio un error, ', error);
        this.router.navigate(['error']);
      });
  }

  private mapProjects(): void {
    this.projectsItems.forEach((project) => {
      this.projects.push({
        projectName: project.projectName,
        id: project.id,
        campaigns: this.mapCampaign(project.campaigns),
      });
    });
  }

  private mapCampaign(campaignsModels: CampaignModel[]): CardMainModel[] {
    let campaigns: CardMainModel[] = [];

    campaignsModels.forEach((campaign) => {
      campaigns.push({
        title: campaign.campaignName,
        cardId: campaign.id,
        colorIcon: 'icon-green-color',
        icon: 'far fa-file-excel',
        link: '/load-file',
      });
    });

    return campaigns;
  }
}
