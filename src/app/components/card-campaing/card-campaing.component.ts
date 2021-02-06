import { Component, Input, OnInit } from '@angular/core';
import { CampaignModel } from '../models/campaign.model';

@Component({
  selector: 'app-card-campaing',
  templateUrl: './card-campaing.component.html',
  styleUrls: ['./card-campaing.component.scss']
})
export class CardCampaingComponent implements OnInit {

  @Input() configCampaign: CampaignModel;

  ngOnInit(): void {
    if (!this.configCampaign) {
      throw new Error("Property link is necesary in [CampaignModel]");
    }
  }

}
