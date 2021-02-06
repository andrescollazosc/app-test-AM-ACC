import { Component, OnInit } from '@angular/core';
import { ItemsDashBoardMock } from 'src/app/mocks/items-dashboard.mock';
import { CardMainModel } from '../../models/card-main.model';

@Component({
  selector: 'app-main-dashboard-page',
  templateUrl: './main-dashboard-page.component.html',
  styleUrls: ['./main-dashboard-page.component.scss']
})
export class MainDashboardPageComponent implements OnInit {

  public configItemsDasboard: CardMainModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems(): CardMainModel[] {
    return this.configItemsDasboard = ItemsDashBoardMock.getItemsDashBoard();
  }

}
