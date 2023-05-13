import { Component, OnDestroy, OnInit } from '@angular/core';
import { SiteScraperService } from '../shared/services/site/site-scraper.service';
import { Subscription } from 'rxjs';
import { appConfig } from '../app.config';

@Component({
  selector: 'app-site-scraper',
  templateUrl: './site-scraper.component.html',
  styleUrls: ['./site-scraper.component.scss']
})
export class SiteScraperComponent implements OnInit, OnDestroy {

  scrapedData: any;
  scrapedJSON: any;
  subGetPackage$!: Subscription;
  subscriptionList = new Subscription();
  displayedColumns: string[] = ['title', 'packageName', 'description', 'price', 'discount'];

  constructor(private _siteScraperService: SiteScraperService) {}

  ngOnInit(): void {
    this.scrapedData = [];
    this.scrapedJSON = '';
  }

  /**
   * call getPackages to get data from /scraper endpoint and
   * set it to scrapData array
   */
  scrapeWebsite() {
    this.scrapedData = [];
    this.scrapedJSON = '';
    this.subGetPackage$ = this._siteScraperService.getPackages().subscribe({
      next: response => { this.scrapedData = response; },
      error: error => {
        this.scrapedData = [];
        this.scrapedJSON = '';
        alert(error?.error?.message);
      },
      complete: () => this.subscriptionList.add(this.subGetPackage$)
    });
  }

  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
  }
}
