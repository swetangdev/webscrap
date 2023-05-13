import { TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { SiteScraperService } from './site-scraper.service';
import { of } from 'rxjs';

describe('SiteScraperService', () => {
  let service: SiteScraperService, httpClientSpy: jasmine.SpyObj<HttpClient>;
  const packages = require('../../../../assets/testdata/packages.json');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new SiteScraperService(httpClientSpy);
  });

  it('should be created SiteScraperService', () => {
    expect(service).toBeTruthy();
  });

  it('should return subscription packages (Http called once)', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(packages));
    service.getPackages().subscribe({
      next: response => { expect(response).toEqual(packages); done(); },
      error: error => done.fail()
    });
  })

});
