import { GenericModel } from "../models/generic.model";

export interface InfoNotification{
    id: string;
    project: GenericModel;
    campaign: GenericModel;
    notificationFile?: string | ArrayBuffer;
    detailNotificationFile?: string | ArrayBuffer;
}