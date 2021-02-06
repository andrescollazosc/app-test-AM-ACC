import { ProjectModel } from '../models/project.model';

export class ProjectsMocks {
  public static getProjectsByCustomerId(customerId: number): ProjectModel[] {
    return [
      {
        projectName: 'Cartera',
        projectId: 'dsdsds-dsdsd-ddsds',
        campaigns: [
          {
            title: 'cobro juridico',
            cardId: 'dsds-dsd456-ds45d4s',
            link: '/load-file',
            icon: 'far fa-file-excel',
            colorIcon: 'icon-green-color'
          },
          {
            title: 'cobro pre juridico',
            cardId: 'dsds-dsd456-4564ddf',
            link: '/load-file',
            icon: 'far fa-file-excel',
            colorIcon: 'icon-green-color'
          },
          {
            title: 'Recuperación',
            cardId: 'dsds-dsd456-12ddd54d',
            link: '/load-file',
            icon: 'far fa-file-excel',
            colorIcon: 'icon-green-color'
          },
        ],
      },
      {
        projectName: 'Cobros importantes',
        projectId: 'dsdsds-dsdsd-ddsds',
        campaigns: [
          {
            title: 'Cobranza',
            cardId: 'dsds-dsd456-4sd4s4s5',
            link: '/load-file',
            icon: 'far fa-file-excel',
            colorIcon: 'icon-green-color'
          },
        ],
      },
    ];
  }
}
