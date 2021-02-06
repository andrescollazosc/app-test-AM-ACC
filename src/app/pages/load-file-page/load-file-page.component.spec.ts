import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFilePageComponent } from './load-file-page.component';

describe('LoadFilePageComponent', () => {
  let component: LoadFilePageComponent;
  let fixture: ComponentFixture<LoadFilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadFilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
