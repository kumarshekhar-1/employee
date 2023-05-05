import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmloyeformComponent } from './epmloyeform.component';

describe('EpmloyeformComponent', () => {
  let component: EpmloyeformComponent;
  let fixture: ComponentFixture<EpmloyeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpmloyeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpmloyeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
