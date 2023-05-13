import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteScraperComponent } from './site-scraper.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { SiteScraperService } from '../shared/services/site/site-scraper.service';

describe('SiteScraperComponent', () => {
  let component: SiteScraperComponent;
  let fixture: ComponentFixture<SiteScraperComponent>;
  let siteScraperService: any;
  const packages = require('../../assets/testdata/packages.json');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ SiteScraperComponent ],
      providers: [SiteScraperService]
    })
    .compileComponents();
    siteScraperService = TestBed.inject(SiteScraperService);
    fixture = TestBed.createComponent(SiteScraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button', () => {
    fixture = TestBed.createComponent(SiteScraperComponent);
    fixture.detectChanges();
    const htmlEle = fixture.nativeElement as HTMLElement;
    expect(htmlEle.querySelector('.btn')).toBeTruthy();
  });

  describe('scrapeWebsite', () => {
    beforeEach(() => {
      spyOn(siteScraperService, 'getPackages').and.returnValue(of(packages));
      component.scrapeWebsite();
    });

    it('should set scrapedData', () => {
      expect(component.scrapedData).toEqual(packages);
    });
  });
});
