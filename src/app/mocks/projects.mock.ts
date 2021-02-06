import { ProjectModel } from '../components/models/project.model';

export class ProjectsMocks {
  public static getProjectsByCustomerId(customerId: number): ProjectModel[] {
    return [
      {
        projectName: 'Cartera',
        projectId: 'dsdsds-dsdsd-ddsds',
        campaigns: [
          {
            campaignName: 'cobro juridico',
            campaignId: 'dsds-dsd456-ds45d4s',
            link: 'load-file',
          },
          {
            campaignName: 'cobro pre juridico',
            campaignId: 'dsds-dsd456-4564ddf',
            link: 'load-file',
          },
          {
            campaignName: 'Recuperación',
            campaignId: 'dsds-dsd456-12ddd54d',
            link: 'load-file',
          },
        ],
      },
      {
        projectName: 'Cobros importantes',
        projectId: 'dsdsds-dsdsd-ddsds',
        campaigns: [
          {
            campaignName: 'Cobranza',
            campaignId: 'dsds-dsd456-4sd4s4s5',
            link: 'load-file',
          },
        ],
      },
    ];
  }
}
