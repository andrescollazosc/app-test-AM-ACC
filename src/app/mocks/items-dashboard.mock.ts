import { CardMainModel } from '../models/card-main.model';


export class ItemsDashBoardMock {
    
    public static getItemsDashBoard(): CardMainModel[] {
        return [{
            link: '',
            title: 'Configuración cliente',
            icon: 'fas fa-user-cog',
            colorIcon: 'icon-orange-color'
        },
        {
            link: 'projects',
            title: 'Notificaciones',
            icon: 'fas fa-bell',
            colorIcon: 'icon-orange-color'
        },
        {
            link: '',
            title: 'Reportes y documentos',
            icon: 'fas fa-file-alt',
            colorIcon: 'icon-orange-color'
        }];
    }

}