import { TestBed } from '@angular/core/testing';

import { LoanCategoryService } from './loan-category.service';

describe('LoanCategoryService', () => {
  let service: LoanCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
