import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesReduxListComponent } from './movies-redux-list.component';

describe('MoviesReduxListComponent', () => {
  let component: MoviesReduxListComponent;
  let fixture: ComponentFixture<MoviesReduxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesReduxListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesReduxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
