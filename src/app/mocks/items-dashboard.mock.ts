import { CardMainModel } from '../models/card-main.model';


export class ItemsDashBoardMock {
    
    public static getItemsDashBoard(): CardMainModel[] {
        return [{
            link: '',
            title: 'Configuración cliente',
            icon: 'fas fa-user-cog',
            colorIcon: 'icon-dark-blue-color'
        },
        {
            link: 'projects',
            title: 'Notificaciones',
            icon: 'fas fa-bell',
            colorIcon: 'icon-dark-blue-color'
        },
        {
            link: '',
            title: 'Reportes y documentos',
            icon: 'fas fa-file-alt',
            colorIcon: 'icon-dark-blue-color'
        }];
    }

}