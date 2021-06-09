import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesReduxEntryComponent } from './movies-redux-entry.component';

describe('MoviesReduxEntryComponent', () => {
  let component: MoviesReduxEntryComponent;
  let fixture: ComponentFixture<MoviesReduxEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesReduxEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesReduxEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
