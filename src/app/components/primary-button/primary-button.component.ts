import { Component, Input, OnInit, Output } from '@angular/core';
import { ButtonModel } from '../../models/button.model';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})

export class PrimaryButtonComponent implements OnInit {

  @Input() configButton: ButtonModel;

  constructor() { }

  ngOnInit(): void {
  }

}
