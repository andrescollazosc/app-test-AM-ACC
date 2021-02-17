import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CardMainModel } from '../../models/card-main.model';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.scss']
})
export class CardMainComponent implements OnInit {

  @Input() configCampaign: CardMainModel;
  @Output() cardMainEvent = new EventEmitter<CardMainModel>();

  ngOnInit(): void {
    if (!this.configCampaign) {
      throw new Error("Property link is necesary in [CardMainModel]");
    }
  }

  public onClick(value:CardMainModel):void {
    this.cardMainEvent.emit(value);
  }

}
