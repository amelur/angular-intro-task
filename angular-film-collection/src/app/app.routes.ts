import {Routes} from '@angular/router';
import {FilmList} from './features/film-list/film-list'
import {FilmDetails} from './features/film-details/film-details';
import {About} from "./features/about/about";


export const routes: Routes = [
  {
    path: '',
    component: FilmList
  },
  {
    path: 'film/:id',
    component: FilmDetails
  },
  {path: 'about', component: About},
  {path: '**', redirectTo: ''}
];
