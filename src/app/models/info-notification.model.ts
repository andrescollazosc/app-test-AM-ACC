import { GenericModel } from "../models/generic.model";
import { CampaignModel } from "./campaign.model";
import { ProjectModel } from './project.model';

export interface InfoNotification{
    id: string;
    project: ProjectModel;
    campaign: CampaignModel;
    notificationFile?: string | ArrayBuffer;
    detailNotificationFile?: string | ArrayBuffer;
}