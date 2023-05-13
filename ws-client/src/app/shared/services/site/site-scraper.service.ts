import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { appConfig } from '../../../../app/app.config';


@Injectable({
  providedIn: 'root'
})
export class SiteScraperService {

  constructor(private _http: HttpClient) {}

  /**
   * http call to get data by scrape the website
   * @returns JSON array containing packages by type sorted in desc order by price
   */
  getPackages(): Observable<any> {
    return this._http.get<any>(environment.apiUrl + appConfig.scraperUrl);
  }
}
