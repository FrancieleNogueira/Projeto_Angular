import { TestBed } from '@angular/core/testing';

import { ApiprojetoAngularService } from './apiprojeto-angular.service';

describe('ApiprojetoAngularService', () => {
  let service: ApiprojetoAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiprojetoAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
