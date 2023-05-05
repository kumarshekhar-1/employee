import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployeeformComponent } from './newemployeeform.component';

describe('NewemployeeformComponent', () => {
  let component: NewemployeeformComponent;
  let fixture: ComponentFixture<NewemployeeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewemployeeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewemployeeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
