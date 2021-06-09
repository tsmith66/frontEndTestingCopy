import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesRawComponent } from './components/movies/components/movies-raw/movies-raw.component';
import { MoviesReduxComponent } from './components/movies/components/movies-redux/movies-redux.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TempConverterComponent } from './components/temp-converter/temp-converter.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: 'raw',
        component: MoviesRawComponent
      },
      {
        path: 'redux',
        component: MoviesReduxComponent
      }
    ]
  },
  {
    path: 'converter',
    component: TempConverterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
