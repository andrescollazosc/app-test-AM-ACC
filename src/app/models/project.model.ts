import { CardMainModel } from './card-main.model';

export interface ProjectModel {
  projectName: string;
  projectId: string;
  campaigns: CardMainModel[];
}
