import { HttpClient } from "@angular/common/http";
import { MoviesDataService } from "./movies-data.service";
import { of } from 'rxjs';

describe('the movies data service', () => {


  it('you can just use a jasmine fake for it ', () => {
    const fakeClient: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('HttpClient', ['get']);
    const service = new MoviesDataService(fakeClient);
    const fakeData = {
      data: [
        { id: '1', title: 'Jaws', director: 'Spielberg', yearReleased: 1977 }
      ]
    };
    fakeClient.get.and.returnValue(of(fakeData));
    //fakeClient.get.and.callThrough();
    service.getAll().subscribe(d => {
      expect(d).toEqual(fakeData.data);
    });
  });


});


