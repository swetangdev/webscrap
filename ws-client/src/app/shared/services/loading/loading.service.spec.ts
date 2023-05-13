import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created LoadingService', () => {
    expect(service).toBeTruthy();
  });

  it('should call toggleLoader', () => {
    service.toggleLoader(false);
    expect(service.loadingSubject.value).toEqual(false);
  })

});
