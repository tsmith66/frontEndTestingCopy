import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesDataService } from 'src/app/services/movies-data.service';

import { MoviesRawComponent } from './movies-raw.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('MoviesRawComponent', () => {
  let component: MoviesRawComponent;
  let fixture: ComponentFixture<MoviesRawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesRawComponent],
      providers: [MoviesDataService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
