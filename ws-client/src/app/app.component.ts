import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from './shared/services/loading/loading.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  isLoading!: boolean;
  subLoading$!: Subscription;
  subscriptionList = new Subscription();

  constructor(private _loadingService: LoadingService) {}

  ngOnInit(): void {
    this.isLoading = false;
    this.getRequestStatus();
  }

  getRequestStatus() {
    this.subLoading$ = this._loadingService.loading$.subscribe({
      next: response =>  this.isLoading = response,
      error: error => console.error(error),
      complete: () => this.subscriptionList.add(this.subLoading$)
    });
  }

  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
  }
}
