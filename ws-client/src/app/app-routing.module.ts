import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteScraperComponent } from './site-scraper/site-scraper.component';

const routes: Routes = [
  { path : '', component: SiteScraperComponent },
  { path : '**', component: SiteScraperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
