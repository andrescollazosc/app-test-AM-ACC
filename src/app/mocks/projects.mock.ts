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
      {
        projectName: 'Cartera BackOffice',
        projectId: 'ds45-gf454-gf45d656',
        campaigns: [
          {
            title: 'cobro pre juridico',
            cardId: 'dsds-dsd456-ds45dq4561',
            link: '/load-file',
            icon: 'far fa-file-excel',
            colorIcon: 'icon-green-color'
          },
          {
            title: 'cobro pos juridico',
            cardId: 'dsds-dsd456-78a44',
            link: '/load-file',
            icon: 'far fa-file-excel',
            colorIcon: 'icon-green-color'
          },
          {
            title: 'Recuperación',
            cardId: 'dsds-dsd456-s5d45d',
            link: '/load-file',
            icon: 'far fa-file-excel',
            colorIcon: 'icon-green-color'
          },{
            title: 'cobro juridico',
            cardId: 'dsds-dsd456-ss2s1d2s5',
            link: '/load-file',
            icon: 'far fa-file-excel',
            colorIcon: 'icon-green-color'
          },
        ]
      }
    ];
  }
}
