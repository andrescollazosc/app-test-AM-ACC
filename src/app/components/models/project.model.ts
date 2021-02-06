import { CampaignModel } from './campaign.model';

export interface ProjectModel {
  projectName: string;
  projectId: string;
  campaigns: CampaignModel[];
}
