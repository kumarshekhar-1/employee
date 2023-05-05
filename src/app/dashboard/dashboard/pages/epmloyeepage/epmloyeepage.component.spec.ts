import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmloyeepageComponent } from './epmloyeepage.component';

describe('EpmloyeepageComponent', () => {
  let component: EpmloyeepageComponent;
  let fixture: ComponentFixture<EpmloyeepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpmloyeepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpmloyeepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
