import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployeepageComponent } from './newemployeepage.component';

describe('NewemployeepageComponent', () => {
  let component: NewemployeepageComponent;
  let fixture: ComponentFixture<NewemployeepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewemployeepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewemployeepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
