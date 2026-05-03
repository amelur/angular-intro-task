import { Routes } from '@angular/router';
import { FilmList } from './features/film-list/film-list'
import { FilmDetails } from './features/film-details/film-details';


export const routes: Routes = [
  {
    path: '',
    component: FilmList
  },
  {
    path: 'film/:id',
    component: FilmDetails
  },
  { path: '**', redirectTo: '' }
];
