import { TestBed } from '@angular/core/testing';

import { EmployeelocalserviceService } from './employeelocalservice.service';

describe('EmployeelocalserviceService', () => {
  let service: EmployeelocalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeelocalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
