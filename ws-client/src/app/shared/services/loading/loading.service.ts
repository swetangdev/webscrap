import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor() { }

  /**
   * Update status of loader
   */
  toggleLoader(isLoading: boolean) {
    this.loadingSubject.next(isLoading);
  }

}
