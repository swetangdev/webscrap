import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoadingService } from './shared/services/loading/loading.service';

describe('AppComponent', () => {
  let component: AppComponent, fixture: ComponentFixture<AppComponent>, loadingService: LoadingService, spyGetRequestStatus: jasmine.Spy;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [LoadingService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    loadingService = TestBed.inject(LoadingService);
    spyGetRequestStatus = spyOn(component, 'getRequestStatus').and.callThrough();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set isLoading', () => {
    expect(component.isLoading).toBeFalse();
  });

  it('should call getRequestStatus', () => {
    expect(spyGetRequestStatus).toHaveBeenCalled();
  })

  describe('getRequestStatus', () => {
    beforeEach(() => {
      component.getRequestStatus();
    });

    it('should set isLoading false', () => {
      expect(component.isLoading).toBeFalse();
    })
  });
});
