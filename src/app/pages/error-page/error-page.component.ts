import { Component, OnInit } from '@angular/core';
import { IconClassEnum } from 'src/app/enum/icon-class.enum';
import { ButtonModel } from '../../models/button.model';
import { Functions } from '../../util/functions';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  public setUpButton: ButtonModel;

  ngOnInit(): void {
    this.configButton();
  }

  private configButton(): void {
    this.setUpButton = Functions.configButton(IconClassEnum.backIcon, 'Volver');
  }

}
