import { HttpClient } from "@angular/common/http";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { tap } from "rxjs/operators";
import { MoviesDataService } from "./movies-data.service";
import { environment } from '../../environments/environment';
describe('testing the movies data service', () => {

  let httpClient: HttpClient;
  let service: MoviesDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesDataService]
    });

    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(MoviesDataService);
    httpTestingController = TestBed.inject(HttpTestingController);


  });
  it('can get all the data!', () => {
    const fakeData = {
      data: [
        { id: '1', title: 'Jaws', director: 'Spielberg', yearReleased: 1977 }
      ]
    };

    // The tap here will run when we flush the request...
    service.getAll().pipe(
      tap(r => expect(r).toEqual(fakeData.data))
    ).subscribe();

    const req = httpTestingController.expectOne(environment.apiUrl + 'movies');
    expect(req.request.method).toBe('GET');

    req.flush(fakeData);

  });

  afterEach(() => {
    // this is good to check that any of the outstanding mocks on the testingController have been verified.
    httpTestingController.verify();
  });
});
