import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesReduxComponent } from './movies-redux.component';

describe('MoviesReduxComponent', () => {
  let component: MoviesReduxComponent;
  let fixture: ComponentFixture<MoviesReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesReduxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
