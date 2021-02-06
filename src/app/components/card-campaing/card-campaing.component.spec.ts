import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCampaingComponent } from './card-campaing.component';

describe('CardCampaingComponent', () => {
  let component: CardCampaingComponent;
  let fixture: ComponentFixture<CardCampaingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCampaingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
