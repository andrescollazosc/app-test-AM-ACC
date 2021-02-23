import { CampaignModel } from './campaign.model';
import { CardMainModel } from './card-main.model';

export interface ProjectModel {
  projectName: string;
  projectId: string;
  campaigns: CardMainModel[];
}

export interface ProjectCampaigns {
  id: string;
  customerId: string;
  projectName: string;
  campaigns: CampaignModel[];
}
